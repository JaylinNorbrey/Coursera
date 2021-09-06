var names=new Array();
names[0]="Yasmin";
names[1]="James";
names[2]="Jenna";
names[3]="jackson";
names[4]="paula";
names[5]="franky";
names[6]="larrie";
names[7]="paulina";
names[8]="laura";
names[9]="jimmy";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}