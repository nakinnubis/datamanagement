

var chart_config = {
	chart: {
		container: "#OrganiseChart-big-commpany",

		animateOnInit: false,

		levelSeparation: 305,

		rootOrientation: "WEST",

		nodeAlign: "BOTTOM",
		

		connectors: {
			type: "step",
			style: {
				"stroke-width": 2
			}
		},
		node: {
			HTMLclass: "big-commpany",
			collapsable: true
		},
		animation: {
			nodeAnimation: "easeOutBounce",
			nodeSpeed: 700,
			connectorsAnimation: "bounce",
			connectorsSpeed: 700
		}
	},

	nodeStructure: {
		text: { name: "FIELD" },
		collapsed: true,
		
		connectors: {
			style: {
				'stroke': '#bbbbbb',
				'arrow-end': 'oval-wide-long'
				
			}
		},
		children: [
			{
				text: { name: "Diebu Creek" },
				stackChildren: false,
				collapsed: true,
				connectors: {
					style: {
						'stroke': '#8080FF',
						'arrow-end': 'block-wide-long'
						
					}
				},
				children: [
					{
						text: {contact:{val: "Well Logs", href: "well_log.html",
						target: "_self"}},
						HTMLclass: "reception"
						
					},
					{
						text: {contact:{val: "Biostratigraphy", href: "biostrat.html",
						target: "_self"}}
					},
					{
						text: {contact:{val: "Core Samples", href: "cores.html",
						target: "_self"}}
					},
					{
						text: {contact:{val: "Seismic Data", href: "seismic_data.html",
						target: "_self"}}
					},
					{
						text: {contact:{val: "Production Data", href: "production.html",
						target: "_self"}}
					},
					{
						text: {contact:{val: "Well Report", href: "well_report.html",
						target: "_self"}}
					}
				]
			},
			{
				text: { name: "Bonga" },
				collapsed: true,
				stackChildren: false,
				connectors: {
					stackIndent: 30,
					style: {
						'stroke': '#E3C61A',
						'arrow-end': 'block-wide-long'
					}
				},
				children: [
					{
						text: {contact:{val: "Well Logs", href: "well_log.html",
						target: "_self"}},
						HTMLclass: "reception"
						
					},
					{
						text: {contact:{val: "Biostratigraphy", href: "biostrat.html",
						target: "_self"}}
					},
					{
						text: {contact:{val: "Core Samples", href: "cores.html",
						target: "_self"}}
					},
					{
						text: {contact:{val: "Seismic Data", href: "seismic_data.html",
						target: "_self"}}
					},
					{
						text: {contact:{val: "Production Data", href: "production.html",
						target: "_self"}}
					},
					{
						text: {contact:{val: "Well Report", href: "well_report.html",
						target: "_self"}}
					}
				]
			},
			{
				text: { name: "OML130" },
				collapsed: true,
				stackChildren: false,
				connectors: {
					stackIndent: 30,
					style: {
						'stroke': '#E3C61A',
						'arrow-end': 'block-wide-long'
					}
				},
				children: [
					{
						text: {contact:{val: "Well Logs", href: "well_log.html",
						target: "_self"}},
						HTMLclass: "reception"
						
					},
					{
						text: {contact:{val: "Biostratigraphy", href: "biostrat.html",
						target: "_self"}}
					},
					{
						text: {contact:{val: "Core Samples", href: "cores.html",
						target: "_self"}}
					},
					{
						text: {contact:{val: "Seismic Data", href: "seismic_data.html",
						target: "_self"}}
					},
					{
						text: {contact:{val: "Production Data", href: "production.html",
						target: "_self"}}
					},
					{
						text: {contact:{val: "Well Report", href: "well_report.html",
						target: "_self"}}
					}
				]
			},
			{
				text: { name: "OML118" },
				collapsed: true,
				stackChildren: false,
				connectors: {
					stackIndent: 30,
					style: {
						'stroke': '#E3C61A',
						'arrow-end': 'block-wide-long'
					}
				},
				children: [
					{
						text: {contact:{val: "Well Logs", href: "well_log.html",
						target: "_self"}},
						HTMLclass: "reception"
						
					},
					{
						text: {contact:{val: "Biostratigraphy", href: "biostrat.html",
						target: "_self"}}
					},
					{
						text: {contact:{val: "Core Samples", href: "cores.html",
						target: "_self"}}
					},
					{
						text: {contact:{val: "Seismic Data", href: "seismic_data.html",
						target: "_self"}}
					},
					{
						text: {contact:{val: "Production Data", href: "production.html",
						target: "_self"}}
					},
					{
						text: {contact:{val: "Well Report", href: "well_report.html",
						target: "_self"}}
					}
				]
			}
		]
	}
};

var obj = {};
obj.password = "1234567";
obj.username = "shell@spdc.com";
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange =function () {
	if(this.readyState == 4 && this.status == 200)  {
		var data = JSON.parse(this.responseText);
		let arrays = data.d;
		//var da = data.d;
		var datas = arrays.replace(/\\/g, "");
		console.log(datas);
	}
};
xhttp.open("POST", "http://dataadministration.apphb.com/Endpoint/Index.aspx/DthreeList",true)
xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
xhttp.send(JSON.stringify(obj));


$(document).ready(function(){
	$.getJSON("http://dataadministration.apphb.com/Endpoint/Welldata.aspx/GetWelldata", function(data){
		var well_data ='';

	})
})

function myFunction1() {

	var x = document.getElementById("myDropdown1");
	var y = document.getElementById("myDropdown2");
	if(x.style.display === "none"){
		x.style.display = "block";
	}
	else{
		x.style.display = "none";
		y.style.display = "none";
	}
	
}

function myFunction2() {
   var y = document.getElementById("myDropdown2");
   if(y.style.display === "none"){
		y.style.display = "block";
	}
	else{
		y.style.display = "none";
   
	} 
}