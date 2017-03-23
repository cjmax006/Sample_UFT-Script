

SystemUtil.Run "C:\Program Files (x86)\HP\Unified Functional Testing\samples\Flights Application\FlightsGUI.exe","","C:\Program Files (x86)\HP\Unified Functional Testing\samples\Flights Application\","open"
'---------------------------
'Use of data table
'---------------------------
DataTable.Import("\\solon.prd\branches\P\Global\Users\C48007\Userdata\Documents\Unified Functional Testing\Sample_Test01\DataSheet.xlsx")
DataTable.SetCurrentRow(1)

WpfWindow("HP MyFlight Sample Application").WpfEdit("agentName").Set DataTable.Value("Login",1) @@ hightlight id_;_2059129616_;_script infofile_;_ZIP::ssf9.xml_;_
WpfWindow("HP MyFlight Sample Application").WpfEdit("password").SetSecure DataTable.Value("Password",1) @@ hightlight id_;_1883401120_;_script infofile_;_ZIP::ssf10.xml_;_

'WpfWindow("HP MyFlight Sample Application").WpfEdit("password").SetSecure "58cfc10e38ce37413eaa" @@ hightlight id_;_1883401120_;_script infofile_;_ZIP::ssf10.xml_;_
WpfWindow("HP MyFlight Sample Application").WpfButton("OK").Click @@ hightlight id_;_1883403568_;_script infofile_;_ZIP::ssf11.xml_;_

'Call Hello()





