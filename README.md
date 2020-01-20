# CSharpExpenseCalculator
ASP.NET Web API, Angular / CLI, Entity Framework (Budget App w/ token auth)

<img alt="Entries" src="http://markupdeveloper.com/wp-content/uploads/2020/01/signedInEntries.jpg">

<img alt="Entries" src="">
<img alt="Entries" src="">
 <strong>Marcus Barnes</strong>

<strong>Purpose:</strong> This is a simple ASP.NET Web API project with database tables designed to demonstrate to utilize Entity Framework with tables within a database for user authentication and other expense data. The C# “ExpensesAPI” (server side) was written in Visual Studio 2017 and the Angular /CLI “ExpensesClient” (client side) written in VS Code (v1.41.1)

<strong>Directions:</strong>
<ul>
 	<li>Open up folder “ExpensesClient” in Visual Studio Code</li>
 	<li>Open up sln ExpnesesAPI in Microsoft Visual Studio
<ul>
 	<li></li>
</ul>
</li>
 	<li>Run client by entering “<em>ng serve -o” </em>into the terminal/CL</li>
 	<li>Run server app in VS (this must be running also to communicate with the database)</li>
</ul>
<strong>If you have trouble running:</strong>
<ul>
 	<li>If you get this error while running the client
<ul>
 	<li><em>An unhandled exception occurred: Could not find module "@angular-devkit/build-angular" from….</em></li>
 	<li>Then run this in the CL
<ul>
 	<li><em>npm install --save-dev @angular-devkit/build-angular</em></li>
</ul>
</li>
 	<li>If the database doesn’t populate
<ul>
 	<li>Create new local SQL server database
<ul>
 	<li>Open Server Explorer</li>
 	<li>Right-click Data Connections</li>
 	<li>Click “Create New SQL Server Database”</li>
 	<li>Type in “.” or “(local)” for server name</li>
 	<li>Type in ExpensesDb for server name</li>
 	<li>After set up, click on DB and press f4
<ul>
 	<li>Copy the connection string</li>
</ul>
</li>
 	<li>Navigate to Web.config
<ul>
 	<li>Near the bottom, replace the “connectionString” value with the new one</li>
 	<li>Click on ExpensesAPI solution, press f4 to bring up properties, copy the url ex. <a href="http://localhost:49189/">http://localhost:49189/</a></li>
 	<li>Go to VS Code &gt; src &gt; app &gt; entry.service.ts</li>
 	<li>Replace base Url value up to the localhost number (ex. 49189), leave the ‘/api/entries/’ on the end.</li>
 	<li>format is: ‘http://localhost:#####/api/entries/’</li>
</ul>
</li>
 	<li></li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
<strong> </strong>

<strong>Specifications:</strong>
<ul>
 	<li>Microsoft Aspnet web api 2.2</li>
 	<li>@angular/cliW</li>
 	<li>NuGet packages (may have included a few extras in list):
<ul>
 	<li>EntityFramework by Microsoft</li>
 	<li>AspNet.Mvc</li>
 	<li>AspNet.TelemetryCorrelation</li>
 	<li>AspNet.Web.Optimization</li>
 	<li>AspNet.WebApi.Core</li>
 	<li>AspNet.WebApi.Cors</li>
 	<li>AspNet.WebApi.HelpPage</li>
 	<li>AspNet.WebApi.WebHost</li>
 	<li>AspNet.WebPages</li>
 	<li>IdentityModel.JsonWebTokens</li>
 	<li>IdentityModel.Logging</li>
 	<li>IdentityModel.Tokens</li>
 	<li>IdentityModel.Tokens.Jwt</li>
</ul>
</li>
</ul>
<strong>Features</strong>:
<ul>
 	<li>creation of username and password passed to storage into a local database table.</li>
 	<li>Sign in/Sign out of users from the database, using tokens and placed in local storage</li>
 	<li>allows users to add, edit, and delete entries (either expense or income)</li>
 	<li>filter the entries by name</li>
</ul>
<strong>Useful References:</strong>
<ul>
 	<li><a href="https://material.angular.io/guide/getting-started">https://material.angular.io/guide/getting-started</a></li>
</ul>

<strong>Other Screenshots:</strong>
<img alt="Entries" src="http://markupdeveloper.com/wp-content/uploads/2020/01/signin.jpg">
<img alt="Entries" src="http://markupdeveloper.com/wp-content/uploads/2020/01/RegisterUser.jpg">
<img alt="Entries" src="http://markupdeveloper.com/wp-content/uploads/2020/01/Entry-edit.jpg">
<img alt="Entries" src="http://markupdeveloper.com/wp-content/uploads/2020/01/denialAccess.jpg">
<img alt="Entries" src="http://markupdeveloper.com/wp-content/uploads/2020/01/DeleteEntry.jpg">

<img alt="Entries" src="http://markupdeveloper.com/wp-content/uploads/2020/01/CreateEntry.jpg">
