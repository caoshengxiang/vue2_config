/**
 * https://github.com/songsiqi/px2rem
 * version: 0.1.2
 */

/* eslint-disable import/no-extraneous-dependencies */
const postcss = require('postcss');
const cssProcessor = require('css');
const extend = require('extend');
const Px2rem = require('px2rem');
/* eslint-enable */

module.exports = postcss.plugin('postcss-px2rem', (options) => {
    return function(css, result) {
        let px2remIns;
        if (options.useRemTest.useNoCommentRemTest(css.source.input.file)) {
            px2remIns = new NoCommentPx2rem(options);
        } else if (options.useRemTest.useRemTest(css.source.input.file)) {
            px2remIns = new Px2rem(options);
        }
        if (px2remIns) {
            const oldCssText = css.toString();
            const newCssText = px2remIns.generateRem(oldCssText);
            result.root = postcss.parse(newCssText);
        }
    };
});


const defaultConfig = {
    baseDpr: 2,             // base device pixel ratio (default: 2)
    remUnit: 75,            // rem unit value (default: 75)
    remPrecision: 6,        // rem value precision (default: 6)
    forcePxComment: 'px',   // force px comment (default: `px`)
    keepComment: 'no'       // no transform value comment (default: `no`)
};

const pxRegExp = /\b(\d+(\.\d+)?)px\b/;
const dpxRegExp = /\b(\d+(\.\d+)?)dpx\b/;
const rpxRegExp = /\b(\d+(\.\d+)?)rpx\b/;

function NoCommentPx2rem(options) {
    this.config = {};
    extend(this.config, defaultConfig, options);
}

// generate @1x, @2x and @3x version stylesheet
NoCommentPx2rem.prototype.generateThree = function(cssText, dpr) {
    dpr = dpr || 2;
    const self = this;
    const config = self.config;
    const astObj = cssProcessor.parse(cssText);

    function processRules(rules) {
        for (let i = 0; i < rules.length; i++) {
            const rule = rules[i];
            if (rule.type === 'media') {
                processRules(rule.rules); // recursive invocation while dealing with media queries
                continue;
            } else if (rule.type !== 'rule') {
                continue;
            }

            const declarations = rule.declarations;
            for (let j = 0; j < declarations.length; j++) {
                const declaration = declarations[j];
                // need transform: declaration && has 'px'
                if (declaration.type === 'declaration' && pxRegExp.test(declaration.value)) {
                    const nextDeclaration = rule.declarations[j + 1];
                    if (nextDeclaration && nextDeclaration.type === 'comment') { // next next declaration is comment
                        if (nextDeclaration.comment.trim() === config.keepComment) { // no transform
                            declarations.splice(j + 1, 1); // delete corresponding comment
                            continue;
                        } else if (nextDeclaration.comment.trim() === config.forcePxComment) { // force px
                            declarations.splice(j + 1, 1); // delete corresponding comment
                        }
                    }
                    declaration.value = self._getCalcValue('px', declaration.value, dpr); // common transform
                }
            }
        }
    }

    processRules(astObj.stylesheet.rules);

    return cssProcessor.stringify(astObj);
};

// generate rem version stylesheet
NoCommentPx2rem.prototype.generateRem = function(cssText) {
    const self = this;
    const config = self.config;
    const astObj = cssProcessor.parse(cssText);

    function processRules(rules) {
        for (let i = 0; i < rules.length; i++) {
            const rule = rules[i];
            if (rule.type === 'media') {
                processRules(rule.rules); // recursive invocation while dealing with media queries
                continue;
            } else if (rule.type !== 'rule') {
                continue;
            }

            // generate 3 new rules which has [data-dpr]
            const newRules = [];
            for (var dpr = 1; dpr <= 3; dpr++) {
                const newRule = {};
                newRule.type = rule.type;
                newRule.selectors = rule.selectors.map((sel) => {
                    return `[data-dpr="${dpr}"] ${sel}`;
                });
                newRule.declarations = [];
                newRules.push(newRule);
            }

            const declarations = rule.declarations;
            for (let j = 0; j < declarations.length; j++) {
                const declaration = declarations[j];
                // need transform: declaration && has 'px'
                if (declaration.type === 'declaration') {
                    const nextDeclaration = rule.declarations[j + 1];
                    if (dpxRegExp.test(declaration.value)) { // next next declaration is comment
                        declaration.value = declaration.value.replace('d', '');
                        // do not transform `0px`
                        if (declaration.value === '0px') {
                            declaration.value = '0';
                            declarations.splice(j + 1, 1); // delete corresponding comment
                            continue;
                        }
                        // generate 3 new declarations and put them in the new rules which has [data-dpr]
                        for (var dpr = 1; dpr <= 3; dpr++) {
                            const newDeclaration = {};
                            extend(true, newDeclaration, declaration);
                            newDeclaration.value = self._getCalcValue('px', newDeclaration.value, dpr);
                            newRules[dpr - 1].declarations.push(newDeclaration);
                        }
                        declarations.splice(j, 2); // delete this rule and corresponding comment
                        j--;
                    } else if (rpxRegExp.test(declaration.value)) {
                        declaration.value = declaration.value.replace('r', '');
                    } else if (pxRegExp.test(declaration.value)) {
                        declaration.value = self._getCalcValue('rem', declaration.value); // common transform
                    }
                }
            }

            // if the origin rule has no declarations, delete it
            if (!rules[i].declarations.length) {
                rules.splice(i, 1);
                i--;
            }

            // add the new rules which contain declarations that are forced to use px
            if (newRules[0].declarations.length) {
                rules.splice(i + 1, 0, newRules[0], newRules[1], newRules[2]);
                i += 3; // skip the added new rules
            }
        }
    }

    processRules(astObj.stylesheet.rules);

    return cssProcessor.stringify(astObj);
};

// get calculated value of px or rem
NoCommentPx2rem.prototype._getCalcValue = function(type, value, dpr) {
    const config = this.config;
    const pxGlobalRegExp = new RegExp(pxRegExp.source, 'g');

    function getValue(val) {
        val = parseFloat(val.toFixed(config.remPrecision)); // control decimal precision of the calculated value
        return val == 0 ? val : val + type;
    }

    return value.replace(pxGlobalRegExp, ($0, $1) => {
        return type === 'px' ? getValue($1 * dpr / config.baseDpr) : getValue($1 / config.remUnit);
    });
};
