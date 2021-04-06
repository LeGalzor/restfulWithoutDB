# <span id="top">RestfulAPI with Node.js</span>

<table style="font-family:Helvetica,Arial;font-size:14px;line-height:1.6;">
  <tr>
  <td style="border:0;padding:0 10px 0 0;min-width:120px;"><a href="https://nodejs.org/" rel="external"><img src="https://nodejs.org/static/images/logos/nodejs-new-pantone-black.svg" width="120" alt="Node.js logo"/></a></td>
  <td style="border:0;padding:0;vertical-align:text-top;">This repository gathers <a href="https://nodejs.org/en/" rel="external">Node.js</a> code examples coming from various websites and books.<br/>
  </td>
  </tr>
</table>

> **&#9755;** ***Installation and running methods***<br/>
> - $ git clone https://github.com/LeGalzor/restfulWithoutDB.git <br/>
> - $ npm install <br/>
> - $ node app.js ***or*** npm start <br/>


## <span id="structure">Directory structure</span>

This project is organized as follows:
<pre style="font-size:80%;">
bin\
routes\{<a href="routes/index.js">index.js</a>, ..}
routes\tests\{<a href="tests/resource.test.js">resource.test.js</a>, ..}
README.md
</pre>

where

- directory [**`tests/`**](tests/) contains utility tests scripts built with chai and mocha.
- file [**`.mocharc.json`**](.mocharc.json) is the config json for setting up our mocha environment.
- file [**`.resource.test.js`**](resource.test.js) is the mocha test suites for this application.
- file [**`README.md`**](README.md) is the [Markdown][github_markdown] document for this page.

>

