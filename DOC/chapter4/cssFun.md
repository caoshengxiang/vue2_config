# css 函数库

##### px2rem
```css
/** px2rem
* @param $px 像素值
* @param $base-font-size html字体大小
* @return rem
*/

@function px2rem($px, $base-font-size: $base-font-size) {
  @if (unitless($px)) {
    @warn "Assuming #{$px} to be in pixels, attempting to convert it into pixels for you";
    @return px2rem($px + 0px); // That may fail.
  } @else if (unit($px) == rem) {
    @return $px;
  }
  @return ($px / $base-font-size) * 1rem;
}
```