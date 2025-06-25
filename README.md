## Return of the Dark Sorcerer website

### Description
This repository contains RotDS 2.13 informations, assets and media files such as MML scripts, SPC songs, BRR samples, monster sprites and details, item details, character portraits, NPC portraits, strategy guide, character informations, world maps and an archive page. This website and its generator are a work-in-progress, meaning new sections are added periodically, character and NPC field sprites being the next step.

### Repository 
The code in the `generator` folder, mostly Python code and the monster sprite extractor made in C#, is what is used to generate some javascript files as well as some assets like SPC files and monster sprites. The `website` folder is the static website (with a bit of Javascript) currently online.

### Website URL
The website is currently hosted at https://www.rotds.com.

### Dependencies
1. Generator dependencies
    * [Jinja2 3.1.4](https://pypi.org/project/Jinja2/)
    * [pillow 10.4.0](https://pypi.org/project/pillow/)
    * [beautifulsoup4 4.12.3](https://pypi.org/project/beautifulsoup4/)
    * [lxml 5.2.2](https://pypi.org/project/lxml/)
    * [mfvitools](https://github.com/emberling/mfvitools) (partially included in `generator/music`)
2. Website dependencies (included from CDN)
    * [Bootstrap 5.2.3](https://getbootstrap.com/docs/5.2/getting-started/download/)
    * [jQuery 3.6.3](https://jquery.com/)
    * [SMW Central SPC Player](https://github.com/telinc1/smwcentral-spc-player)

### Credits
The following people contributed to the romhack assets hosted or on portions of the generator/website code, see the [credit page](https://www.rotds.com/credits.html) for details.

* Gi Nattak
* emberling
* Monsterinabox.INC
* LunaticScreamer
* telinc1
* Jackimus
* tsushiy
* JCE3000GT
* MetroidQuest
* Cecil188
* Lockirby



