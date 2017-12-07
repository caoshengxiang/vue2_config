# ubuntu下卸载webstorm

### ubuntu下卸载webstorm
> 在linux下webstorm是通过 ./webstorm.sh安装的，直接删除webstorm的解压目录并没有完全删除
 一、尝试阅读webstorm解药目录下Install-Linux-tar.txt文件（一般安装都会readme文件之类的），提示有：

    1. Open a console and cd into ~/.WebStorm2016.3/
    2. Create the file "idea.properties" and open it in an editor. Set the
     idea.system.path and/or idea.config.path variables as desired, for
     example:

     idea.system.path=~/custom/system
     idea.config.path=~/custom/config

    3. Note that we recommend to store data cache ("system" directory) on a disk
     with at least 1GB of free space.

>   二、把.WebStorm2016.3目录删掉
    linux下使用命令rm -r .WebStorm 会提示错误，可使用del键删除



### webstorm问题：Push failed: Failed with error: fatal: Could not read from remote repository.
解决：
file->settings->version control将SSH Executable 更换为Native