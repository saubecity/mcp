/* mcp client source code - commercial use not allowed unless authorised*/

var mcp = {}
mcp["gui"] = {}
document.body.innerHTML = "";
document.body.style.background = "";

mcp.gui["button"] = function (width, height, turl, fn) {
    var temp = document.createElement("div");
    temp.style.height = height + "px"
        temp.style.width = width + "px"
        temp.style.background = "url('resources/stone.png')"
        temp.style.backgroundSize = "30px"
        temp.style.imageRendering = "pixelated";
    temp.style.border = "solid 3px #4B4B4B";
    temp.onmouseover = function () {
        this.style.border = "solid 3px white";
    }
    temp.onmouseout = function () {
        this.style.border = "solid 3px #4B4B4B";
    }
    var t = document.createElement("div");
    t.style.height = height + "px"
        t.style.width = width + "px"
        t.style.background = `url('${turl}') no-repeat`
        t.style.backgroundPosition = "center"
        t.style.backgroundSize = "85%"
        temp.appendChild(t);
    temp.onclick = fn
        return temp
}

mcp["mainMenu"] = function () {
    var icon = document.createElement("div")
        icon.style.width = "500px"
        icon.style.height = "150px"
        icon.style.position = "absolute"
        icon.style.top = "40px"
        icon.style.left = window.innerWidth / 2 - 250 + "px"
        icon.style.background = "url('resources/mcp.png') no-repeat"
        icon.style.imageRendering = "pixelated"
        document.body.appendChild(icon);

    var greet = document.createElement("p");
    greet.innerHTML = "Hey ._. Welcome to MCP Tools!<br>\
        This small project i made contains some tools for minecraft such as <br>\
        making portables instances for mc (works on usb too), <br>\
        minecraft assets & classpath downloader and more useless tools!<br>\
        ";

    // Style the greeting :)
    greet.style.fontFamily = "minecraft";
    greet.style.fontSize = "18px";
    greet.style.color = "white";
    greet.style.textAlign = "center";
    greet.style.position = "relative"
        greet.style.top = "150px"
        greet.style.textShadow = "2px 2px 2px rgba(0, 0, 0, 0.5)";
    greet.style.padding = "10px";
    document.body.appendChild(greet);

    var basic_int = document.createElement("p");
    basic_int.innerHTML = "Main tools:"
        basic_int.style.color = '#51FEE7'
        basic_int.style.fontFamily = "minecraft_i"
        basic_int.style.textAlign = "center"
        basic_int.style.fontSize = "20px"
        basic_int.style.position = "relative"
        basic_int.style.textShadow = "2px 2px 2px rgba(0, 0, 0, 0.5)";
    basic_int.style.top = "140px"
        basic_int.style.imageRendering = "auto"

        document.body.appendChild(basic_int);
    // Create button instance
    var instance_btn = mcp.gui.button(400, 80, null, function () {});
    instance_btn.style.position = "absolute";
    instance_btn.style.left = window.innerWidth / 2 - 200 + "px";
    instance_btn.style.top = "320px";

    // Add icon to button
    var icon = document.createElement("div");
    icon.style.background = "url('resources/cmdblock.webp') no-repeat center";
    icon.style.backgroundSize = "80%";
    icon.style.width = "80px";
    icon.style.position = "absolute";
    icon.style.top = "0px";
    icon.style.left = "0px";
    icon.style.height = "80px";
    instance_btn.appendChild(icon);

    // Add text to button
// Main button text
var buttonText = document.createElement("span");
buttonText.textContent = "Portable instance generator";
buttonText.style.fontFamily = "minecraft";
buttonText.style.textShadow = "2px 2px 2px rgba(0, 0, 0, 0.5)";
buttonText.style.position = "absolute";
buttonText.style.left = "90px"; // Offset to the right of the icon
buttonText.style.top = "10px"; // Centered vertically with icon
buttonText.style.fontSize = "20px";
buttonText.style.color = "#ffffff";
instance_btn.appendChild(buttonText);

// Secondary text under the main button text
var secondaryText = document.createElement("span");
secondaryText.style.width = "290px"
secondaryText.textContent = "Generates minecraft instances that you can carry anywhere, works on USB too!"; // Your smaller, secondary text
secondaryText.style.fontFamily = "minecraft";
secondaryText.style.textShadow = "2px 2px 2px rgba(0, 0, 0, 0.5)";
secondaryText.style.position = "absolute";
secondaryText.style.left = "90px"; // Same horizontal position as buttonText
secondaryText.style.top = "35px"; // Positioned just below buttonText
secondaryText.style.fontSize = "14px"; // Smaller font size
secondaryText.style.color = "#dddddd"; // Light gray color
instance_btn.appendChild(secondaryText);

	
	
    instance_btn.appendChild(buttonText);

    // Add description under button

    // Append button to document
    document.body.appendChild(instance_btn);

}
mcp["init"] = function() {
	document.body.innerHTML = ""
    // Create a div element
    var main = document.createElement("div");
    // Set styles for the div
    main.style.position = "fixed"; 
    main.style.top = "0"; 
    main.style.left = "0"; 
    main.style.width = "100vw"; 
    main.style.height = "100vh"; 
    main.style.backgroundImage = "url('resources/bg/mc.webp')"; 
    main.style.backgroundSize = "cover"; 
    main.style.backgroundPosition = "center"; 
    main.style.filter = "blur(8px)";
    main.style.zIndex = "-1"; 
	
	var proxy_ui = mcp.gui.button(30,30,"resources/addServer.png",function() {mcp.init();});
	proxy_ui.style.position = "absolute"
	proxy_ui.style.top = "10px"
	proxy_ui.style.left = "10px"
	document.body.appendChild(proxy_ui);
	
	var navigator_btn = mcp.gui.button(30,30,"resources/gui/worldsIcon.png",function(){mcp.init();mcp.mainMenu();});
	navigator_btn.style.position = "absolute"
	navigator_btn.style.top = "10px"
	navigator_btn.style.left = "50px"
	document.body.appendChild(navigator_btn);
    document.body.appendChild(main);
	
	var p_int = mcp.gui.button(30,30,"resources/cmdblock.webp",mcp.init);
	p_int.style.position = "absolute"
	p_int.style.top = "10px"
	p_int.style.left = "90px"
	document.body.appendChild(p_int);
	var pt_int = mcp.gui.button(30,30,"resources/bookshelf.png",mcp.init);
	pt_int.style.position = "absolute"
	pt_int.style.top = "10px"
	pt_int.style.left = "122px"
	document.body.appendChild(pt_int);
    document.body.appendChild(main);

	
};
mcp.init();
mcp.mainMenu()





mcp["jdkIndex"] = {
	23: "https://download.java.net/openjdk/jdk23/ri/openjdk-23+37_windows-x64_bin.zip",
	22: "https://download.java.net/openjdk/jdk22/ri/openjdk-22+36_windows-x64_bin.zip",
	21: "https://download.java.net/openjdk/jdk21/ri/openjdk-21+35_windows-x64_bin.zip"
}
console.log("welcome to MCP minecraft tools :)")

mcp["createIndependantInstance"] = async function(version, options) {
    console.log(version);
	const java_ver = version.javaVersion.majorVersion
    const proxy = 'https://cors-anywhere.herokuapp.com/'
    const ressourceServer = 'https://resources.download.minecraft.net/'
    const zip = new JSZip();
	if (options && options.includeJdk) {
		console.log("Downloading java jdk " + java_ver);
		const jdk = await fetch( proxy + mcp.jdkIndex[java_ver.toString()])
		if (!jdk.ok) throw new Error(`JDK download failed: check requests`);
		const jdk_blob = await jdk.blob();
		const expand_jdk = await JSZip.loadAsync(jdk_blob);
		Object.keys(expand_jdk.files).forEach(filePath => {
			const file = expand_jdk.file(filePath);
			
			if (file != null) {zip.file("jdk/" + filePath, file.async("blob"));console.log("Expanding file " + filePath)};
		}) 
	}
    await zip.folder("instance/");
    const client = await fetch(version.downloads.client.url);
    if (!client.ok) throw new Error(`Failed to client from mojang`);
    const client_blob = await client.blob();
    await zip.file("client/" + version.id + "/client.jar", client_blob);
    var libs = mcp.getLibraries(version, "windows");
    // libraries
    for (var [index, path] of libs.classpath.entries()) {
        path = path.split("/");
        path.pop();
        path = path.join("/");
        //var folder = zip.folder(path);
        console.log("[@instance] section " + index + " directory " + path);
        // download libs
        const lib = await fetch(proxy + libs.remoteFiles[index]);
        if (!lib.ok) throw new Error(`Failed to fetch library ${libs.remoteFiles[index]}`);
        const blob = await lib.blob();
        await zip.file("libs/" + path + "/" + libs.remoteFiles[index].split('/').pop(), blob);
    }
    var classpath = "client/" + version.id + "/client.jar;";
    libs.classpath.forEach((cp) => classpath += "libs/" + cp + ";");
    await zip.file("classpath.txt", classpath);
    // assets
    if (options && options.downloadAssets) {
        const assets_get = await fetch(proxy + version.assetIndex.url);
        if (!assets_get.ok) throw new Error(`Could not download assets index`);
        const assets = await assets_get.json();
        const assets_key = Object.keys(assets.objects);
        await zip.file("assets/indexes/" + version.assetIndex.id + ".json", JSON.stringify(assets))
        for (var i = 0; i < assets_key.length; i++) {
            var hash = assets.objects[assets_key[i]].hash
            var path = hash.substring(0, 2) + "/" + hash
            console.log(path)
            var asset = await fetch(proxy + ressourceServer + path);
            while (!asset.ok) {
                console.error(`Failed to fetch asset ${assets_key[i]}, retrying...`);
                asset = await fetch(proxy + ressourceServer + path);
            }
            var blob = await asset.blob();
            await zip.file("assets/objects/" + path, blob);
        }	
    }
	// launcher
	var launch = ""
	launch+= ":: You can change settings below such as username and memory:) \n"
	launch+= "set username=nobuyoshi\n:: For memory, use integers only, followed by G for GB or M for MB\nset max_memory=4G\nset heap_memory=1G"
	launch+= "\necho note: your username is set to %username%"
	launch+= `\njdk\\jdk-${java_ver}\\bin\\java.exe -Xmx%max_memory% -Xms%heap_memory% -cp @classpath.txt net.minecraft.client.main.Main --accessToken [] --version ${version.id} --gameDir ./instance --assetsDir ./assets --assetIndex ${version.assetIndex.id} --username %username% --uuid=e9122c2c-aaa5-449b-ab84-4b4a7bf5b512`
	await zip.file("launch.bat", launch);
    zip.generateAsync({
            type: 'blob'
        })
        .then(content => {
            const link = document.createElement('a');
            link.href = URL.createObjectURL(content);
            link.download = "minecraft-" + version.id + ".zip"; // Set the zip file name
            document.body.appendChild(link);
            link.click(); // Trigger the download
            link.remove(); // Clean up
        })
        .catch(error => console.error('Error generating zip file:', error));
}

mcp["getLibraries"] = function(version, os) {
    var libs = { remoteFiles: [], classpath: [] };
    if (os != "windows" && os != "osx" && os != "linux") {
        throw ("Unsupported operating system")
    }
    for (var lib = 0; lib < version.libraries.length; lib++) {
        var rules = version.libraries[lib].rules
        var eligible = false
        if (rules != undefined) {
            for (var i = 0; i < rules.length; i++) {
                if (rules[i].os != undefined) {
                    if (rules[i].os.name == os) {
                        eligible = true;
                    }
                }
            }
        } else {
            eligible = true
        }
        if (eligible == true) {
            libs.classpath.push(version.libraries[lib].downloads.artifact.path);
            libs.remoteFiles.push(version.libraries[lib].downloads.artifact.url);
        }
    }
    return libs
}

mcp["getVersions"] = function(callback) {
	const manifestUrl = "https://launchermeta.mojang.com/mc/game/version_manifest_v2.json";
	const xhr = new XMLHttpRequest();
	xhr.open("GET", manifestUrl, true);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				callback(xhr.responseText);
			}
		}
	}
	xhr.send();
}

mcp["getVersionJson"] = function(version, callback) {
	const xhr = new XMLHttpRequest();
	xhr.open("GET", version.url, true);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				callback(JSON.parse(xhr.responseText));
			}
		}
	}
	xhr.send();
}

function download(ver,opt) {
	mcp.getVersions((versions) => {
	mcp.getVersionJson(JSON.parse(versions).versions[ver], function(version){
		mcp.createIndependantInstance(version, opt);
	})
})
}