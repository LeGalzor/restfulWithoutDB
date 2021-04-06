# <span id="top">RestfulAPI with Node.js</span>

<table style="font-family:Helvetica,Arial;font-size:14px;line-height:1.6;">
  <tr>
  <td style="border:0;padding:0 10px 0 0;min-width:120px;"><a href="https://nodejs.org/" rel="external"><img src="https://nodejs.org/static/images/logos/nodejs-new-pantone-black.svg" width="120" alt="Node.js logo"/></a></td>
  <td style="border:0;padding:0;vertical-align:text-top;">This repository gathers <a href="https://nodejs.org/en/" rel="external">Node.js</a> code examples coming from various websites and books.<br/>
  It also includes several <a href="https://en.wikibooks.org/wiki/Windows_Batch_Scripting">batch files</a> for experimenting with <a href="https://nodejs.org/en/" rel="external">Node.js</a> on the <b>Microsoft Windows</b> platform.
  </td>
  </tr>
</table>

[GraalVM][graalvm_examples], [Haskell][haskell_examples], [Kotlin][kotlin_examples], [LLVM][llvm_examples], [Scala 3][dotty_examples] and [TruffleSqueak][trufflesqueak_examples] are other trending topics we are currently monitoring.

## <span id="proj_deps">Project dependencies</span>

This project depends on two external software for the **Microsoft Windows** plaform:

- [Git 2.31][git_downloads] ([*release notes*][git_relnotes])
- [Node.js 14.x LTS][nodejs_downloads] <sup id="anchor_01"><a href="#footnote_01">[1]</a></sup> ([*release notes*][nodejs_relnotes])
- [MongoDB 3.6][mongodb_downloads] ([*release notes*][mongodb_relnotes])

> **:mag_right:** Git for Windows provides a BASH emulation used to run [**`git`**][git_docs] from the command line (as well as over 250 Unix commands like [**`awk`**][man1_awk], [**`diff`**][man1_diff], [**`file`**][man1_file], [**`grep`**][man1_grep], [**`more`**][man1_more], [**`mv`**][man1_mv], [**`rmdir`**][man1_rmdir], [**`sed`**][man1_sed] and [**`wc`**][man1_wc]).

For instance our development environment looks as follows (*April 2021*) <sup id="anchor_02"><a href="#footnote_02">[2]</a></sup>:


> **&#9755;** ***Installation policy***<br/>
> When possible we install software from a [Zip archive][zip_archive] rather than via a Windows installer. In our case we defined **`C:\opt\`** as the installation directory for optional software tools (*in reference to* the [`/opt/`][linux_opt] directory on Unix).

## <span id="structure">Directory structure</span>

This project is organized as follows:
<pre style="font-size:80%;">
bin\
docs\
samples\{<a href="samples/auth-passport/">auth-passport</a>, ..}
samples_Bojinov\{contacts-1-JSON, ..}
samples_Cook\{basic_auth, ..}
samples_Duuna\{chp-3-networking, ..}
samples_Lambert\{04-concepts, ..}
samples_Pillora\
README.md
<a href="setenv.bat">setenv.bat</a>
</pre>

where

- directory [**`bin\`**](bin/) contains utility batch scripts.
- directory [**`docs\`**](docs/) contains [Node.js][nodejs] related papers/articles.
- directory [**`samples\`**](samples/) contains [Node.js][nodejs] code examples grabbed from various websites.
- directory [**`samples_Bojinov\`**](samples_Bojinov/) contains [Node.js][nodejs] code examples from [Bojinov's book][book_bojinov].
- directory [**`samples_Cook\`**](samples_Cook/) contains [Node.js][nodejs] code examples from [Cook's book][book_cook].
- directory [**`samples_Duuna\`**](samples_Duuna/) contains [Node.js][nodejs] code examples from [Düüna's book][book_duuna].
- directory [**`samples_Lambert\`**](samples_Lambert/) contains [Node.js][nodejs] code examples from [Lambert's book][book_lambert].
- directory [**`samples_Pillora\`**](samples_Pillora/) contains [Node.js][nodejs] code examples from [Pillora's book][book_pillora].
- file [**`README.md`**](README.md) is the [Markdown][github_markdown] document for this page.
- file [**`setenv.bat`**](setenv.bat) is the batch script for setting up our environment.

We also define a virtual drive **`N:`** in our working environment in order to reduce/hide the real path of our project directory (see article ["Windows command prompt limitation"][windows_limitation] from Microsoft Support).

> **:mag_right:** We use the Windows external command [**`subst`**][windows_subst] to create virtual drives; for instance:
>
> <pre style="font-size:80%;">
> <b>&gt; <a href="https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/subst">subst</a> N: %USERPROFILE%\workspace\nodejs-examples</b>
> </pre>

In the next section we give a brief description of the batch files present in this project.

## <span id="batch_commands">Batch commands</span>

We distinguish different sets of batch commands:

1. [**`setenv.bat`**](setenv.bat) - This batch command makes the external tools such as [**`node.exe`**][nodejs_node], [**`npm.cmd`**][nodejs_npm] directly available from the command prompt.

    <pre style="font-size:80%;">
    <b>&gt; <a href="setenv.bat">setenv</a> help</b>
    Usage: setenv { &lt;option&gt; | &lt;subcommand&gt; }
    &nbsp;
      Options:
        -debug      show commands executed by this script
        -verbose    display environment settings
    &nbsp;
      Subcommands:
        help        display this help message
    &nbsp;
    <b>&gt; <a href="https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/where_1">where</a> node npm</b>
    C:\opt\node-v14.16.0-win-x64\node.exe
    C:\opt\node-v14.16.0-win-x64\npm
    C:\opt\node-v14.16.0-win-x64\npm.cmd</pre>

2. [**`bin\check-outdated.bat`**](bin/check-outdated.bat) prints out outdated package dependencies for all project directories (i.e. directories containing file **`package.json`**).

   <pre style="font-size:80%;">
   <b>&gt; <a href="bin/check-outdated.bat">bin\check-outdated</a> help</b>
   Usage: check-outdated { &lt;option&gt; | &lt;subcommand&gt; }
   &nbsp;
     Options:
       -debug      show commands executed by this script
       -install    install latest package (if outdated)
       -timer      display total elapsed time
       -verbose    display progress messages
   &nbsp;
     Subcommands:
       help        display this help message</pre>

3. [**`samples\setenv.bat`**](samples/setenv.bat) - This batch command works the same way as in project root directory (point 1) with possibly additional tools (e.g. [**`mongod.exe`**][mongodb_mongod] or [**`siege.exe`**][siege_refman]).

## <span id="usage_examples">Usage examples</span>

### **`setenv.bat`**

Command [**`setenv`**](setenv.bat) is executed once to setup your development environment:

<pre style="font-size:80%;">
<b>&gt; <a href="setenv.bat">setenv</a></b>
Tool versions:
   node v14.16.0, npm 6.14.11
   git 2.31.1.windows.1, diff 3.7
&nbsp;
<b>&gt; <a href="https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/where_1">where</a> npm</b>
C:\opt\node-v14.16.0-win-x64\npm
C:\opt\node-v14.16.0-win-x64\npm.cmd
</pre>

Command [**`setenv -verbose`**](setenv.bat) also displays the tool paths:

<pre style="font-size:80%;">
<b>&gt; <a href="setenv.bat">setenv</a> -verbose</b>
Your environment has been set up for using Node.js 12.16.0 (x64) and npm.
Tool versions:
   node v14.16.0, npm 6.14.11
   git 2.31.1.windows.1, diff 3.7
Tool paths:
   C:\opt\node-v14.16.0-win-x64\node.exe
   C:\opt\node-v14.16.0-win-x64\npm.cmd
   C:\opt\Git-2.31.1\bin\git.exe
   C:\opt\Git-2.31.1\usr\bin\diff.exe
</pre>

### **`bin\check-outdated.bat`**

Command [**`bin\check-outdated`**](bin/check-outdated.bat) visits all project directories and prints out outdated package dependencies. For instance we see in the following output that package **`eslint-plugin-node`** is outdated in several projects:

<pre style="font-size:80%;">
<b>&gt; <a href="bin/check-outdated.bat">bin\check-outdated</a></b>
directory samples\auth-passport\
directory samples\locales-1\
directory samples\locales-2\
directory samples\mongoose-default-connection\
directory samples\webaudio-sample\
   <b>outdated package eslint-plugin-node: current=9.2.0, latest=10.0.0</b>
directory samples_Bojinov\contacts-1-JSON\
directory samples_Bojinov\contacts-2-LevelDB\
directory samples_Bojinov\contacts-3-LevelDB2\
directory samples_Bojinov\contacts-4-Mongoose\
directory samples_Bojinov\contacts-5-MongoDB\
   <b>outdated package eslint-plugin-node: current=9.2.0, latest=10.0.0</b>
directory samples_Bojinov\contacts-6-Image\
[...]
</pre>

Command [**`bin\check-outdated -install`**](bin/check-outdated.bat) also updates the outdated package dependencies (and file **`package.json`**).

### **`samples\setenv.bat`**

Command [**`samples\setenv -verbose`**](samples/setenv.bat) inside project directory [**`samples\`**](samples/) also adds the [**`mongod`**][mongodb_mongod] tool to the path:

<pre style="font-size:80%;">
<b>&gt; <a href="https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/cd">cd</a></b>
N:\samples
&nbsp;
<b>&gt; <a href="samples/setenv.bat">setenv</a> -verbose</b>
Tool versions:
   node v14.16.0, npm 6.14.11
   git 2.31.1.windows.1, diff 3.7, mongod v3.6.22
Tool paths:
   C:\opt\node-v14.16.0-win-x64\node.exe
   C:\opt\node-v14.16.0-win-x64\npm.cmd
   C:\opt\Git-2.31.1\bin\git.exe
   C:\opt\Git-2.31.1\mingw64\bin\git.exe
   C:\opt\Git-2.31.1\usr\bin\diff.exe
   C:\opt\mongodb-win32-x86_64-2008plus-ssl-3.6.22\bin\mongod.exe
</pre>

### **`npm.cmd`**

Command **`npm`** works as expected inside every project directory; for instance in project [**`samples\webaudio-sample\`**](samples/webaudio-sample/).
