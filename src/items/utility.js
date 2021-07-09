const items = [
    {
        id: "torrent",
        name: "µTorrent",
        img: "/list/utorrent.png",
        url: "http://www.utorrent.com/intl/pt/",
        corporation: "BitTorrent Client"
    },
    {
        id: "7zip",
        name: "7-Zip",
        img: "/list/7zip.png",
        url: "http://www.7-zip.org/",
        corporation: "License GNU LGPL"
    },
    {
        id: "allruntimes",
        name: "All in One Runtimes",
        img: "/list/windowsxp.png",
        url: "https://www.computerbase.de/downloads/systemtools/all-in-one-runtimes/?url=108453",
        corporation: "Computer Base"
    },
    {
        id: "atubecatcher",
        name: "Atube Catcher",
        img: "/list/atube.png",
        url: "https://www.atube.me/",
        corporation: "DsNET Corporation"
    },
    {
        id: "avast",
        name: "Avast Antivirus",
        img: "/list/avast.png",
        url: "https://www.avast.com/",
        corporation: "Avast Software"
    },
    {
        id: "avira",
        name: "Avira Antivirus",
        img: "/list/avira.png",
        url: "https://www.avira.com/pt-br/downloads",
        corporation: "Avira Operations"
    },
    {
        id: "bittorrent",
        name: "BitTorrent",
        img: "/list/bittorrent.png",
        url: "http://www.bittorrent.com/lang/pt_br/downloads/",
        corporation: "BitTorrent Inc."
    },
    {
        id: "ccleaner",
        name: "CCleaner",
        img: "/list/ccleaner.png",
        url: "https://www.ccleaner.com/download",
        corporation: "Piriform"
    },
    {
        id: "cdburner",
        name: "CDBurnerXP",
        img: "/list/cdburner.png",
        url: "https://cdburnerxp.se/en/download",
        corporation: "Canneverbe Limited"
    },
    {
        id: "cpuz",
        name: "CPU-Z",
        img: "/list/cpuz.png",
        url: "https://www.cpuid.com/softwares/cpu-z.html",
        corporation: "CPUID"
    },
    {
        id: "files",
        name: "Files",
        img: "/list/files.png",
        url: "https://files-community.github.io/",
        corporation: "Yair A"
    },
    {
        id: "geforce",
        name: "Geforce Experience",
        img: "/list/geforce.png",
        url: "http://www.nvidia.com.br/object/geforce-experience-br.html",
        corporation: "Nvidia Corporation"
    },
    {
        id: "hp",
        name: "HP Support Assistant",
        img: "/list/hp.png",
        url: "http://www8.hp.com/br/pt/campaigns/hpsupportassistant/hpsupport.html",
        corporation: "Hewlett Package"
    },
    {
        id: "hyperx",
        name: "HyperX NGenuity",
        img: "/list/hyperx.png",
        url: "https://www.hyperxgaming.com/br/ngenuity",
        corporation: "Kingston Technology"
    },
    {
        id: "advancedsystemcare",
        name: "Advanced Systemcare",
        img: "/list/advanced.png",
        url: "https://www.iobit.com/pt/advanced-systemcare-antivirus.php",
        corporation: "IObit Software"
    },
    {
        id: "driverbooster",
        name: "Driver Booster",
        img: "/list/driverbooster.png",
        url: "https://www.iobit.com/pt/driver-booster.php",
        corporation: "IObit Software"
    },
    {
        id: "eartrumpet",
        name: "EarTrumpet",
        img: "/list/eartrumpet.png",
        url: "https://eartrumpet.app/",
        corporation: "File-New-Project"
    },
    {
        id: "malware",
        name: "Malware Fighter",
        img: "/list/malware.png",
        url: "https://www.iobit.com/pt/malware-fighter.php",
        corporation: "IObit Software"
    },
    {
        id: "uninstaller",
        name: "Uninstaller",
        img: "/list/uninstaller.png",
        url: "https://www.iobit.com/pt/advanceduninstaller.php",
        corporation: "IObit Software"
    },
    {
        id: "irfanview",
        name: "Irfanview",
        img: "/list/irfanview.png",
        url: "https://www.irfanview.com",
        corporation: "Irfanview, Freeware"
    },
    {
        id: "lastpass",
        name: "Lastpass",
        img: "/list/lastpass.png",
        url: "https://www.lastpass.com/pt",
        corporation: "Lastpass"
    },
    {
        id: "libreoffice",
        name: "LibreOffice",
        img: "/list/libreoffice.png",
        url: "https://pt-br.libreoffice.org/baixe-ja/",
        corporation: "Document Foundation"
    },
    {
        id: "lightshot",
        name: "Lightshot",
        img: "/list/lightshot.png",
        url: "https://app.prntscr.com/build/setup-lightshot.exe",
        corporation: "Skillbrains"
    },
    {
        id: "mailbird",
        name: "Mailbird",
        img: "/list/mailbird.png",
        url: "https://www.getmailbird.com/",
        corporation: "Mailbird"
    },
    {
        id: "onepassword",
        name: "1Password",
        img: "/list/onepassword.png",
        url: "https://1password.com/downloads/",
        corporation: "1Password"
    },
    {
        id: "office2010",
        name: "Office 2010",
        img: "/list/office.png",
        url: "magnet:?xt=urn:btih:CCA124CE534CDD67A5E14613771282686A80511C&dn=Office_2010_br_BRAZIL_PT_PORTUGUES_32_64.nrg&tr=udp%3a%2f%2ftracker.leechers-paradise.org%3a6969&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80&tr=udp%3a%2f%2fopen.demonii.com%3a1337&tr=udp%3a%2f%2ftracker.coppersurfer.tk%3a6969&tr=udp%3a%2f%2fexodus.desync.com%3a6969",
        corporation: "Microsoft Corporation"
    },
    {
        id: "office2016",
        name: "Office 2016",
        img: "/list/office.png",
        url: "magnet:?xt=urn:btih:2b79ce29d90909b2103aa78536277068e1977219&dn=Office+2016+Professional+Plus+RTM+MSDN+x86+x64+pt-BR&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80&tr=udp%3A%2F%2Fopen.demonii.com%3A1337&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Fexodus.desync.com%3A6969",
        corporation: "Microsoft Corporation"
    },
    {
        id: "office2019",
        name: "Office 2019",
        img: "/list/office.png",
        url: "magnet:?xt=urn:btih:b08c001d5a6a581605f989bb105bb4de78830822&dn=Office+Professional+Plus+2019+BR&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Fzer0day.ch%3A1337&tr=udp%3A%2F%2Fopen.demonii.com%3A1337&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Fexodus.desync.com%3A6969",
        corporation: "Microsoft Corporation"
    },
    {
        id: "powertoys",
        name: "Microsoft PowerToys",
        img: "/list/powertoys.png",
        url: "https://github.com/microsoft/PowerToys/releases",
        corporation: "Microsoft Corporation"
    },
    {
        id: "modernflyouts",
        name: "ModernFlyouts",
        img: "/list/modernflyouts.png",
        url: "https://modernflyouts-community.github.io/",
        corporation: "Sam G"
    },
    {
        id: "thunderbird",
        name: "Mozilla Thurderbird",
        img: "/list/thunderbird.png",
        url: "https://www.mozilla.org/pt-BR/thunderbird/",
        corporation: "Mozilla Foundation"
    },
    {
        id: "msiafterburner",
        name: "MSI Afterburner",
        img: "/list/msiafterburner.png",
        url: "https://www.msi.com/Landing/afterburner/graphics-cards",
        corporation: "Micro-Star International"
    },
    {
        id: "netframework",
        name: "NET Framework",
        img: "/list/netframework.png",
        url: "https://www.microsoft.com/pt-br/download/details.aspx?id=17851",
        corporation: "Microsoft Corporation"
    },
    {
        id: "notepads",
        name: "Notepads App",
        img: "/list/notepads.png",
        url: "https://www.notepadsapp.com/",
        corporation: "Jackie Liu"
    },
    {
        id: "operamail",
        name: "Opera Mail",
        img: "/list/operamail.png",
        url: "https://opera-mail.br.jaleco.com/",
        corporation: "Opera Software"
    },
    {
        id: "razercortex",
        name: "Razer Cortex",
        img: "/list/razercortex.png",
        url: "http://www.razerzone.com/br-pt/cortex",
        corporation: "Razer Inc."
    },
    {
        id: "razersynapse",
        name: "Razer Synapse",
        img: "/list/razersynapse.png",
        url: "https://www2.razer.com/br-pt/synapse-3",
        corporation: "Razer Inc."
    },
    {
        id: "realtek",
        name: "Realtek PCIe GBE",
        img: "/list/realtek.png",
        url: "https://www.realtek.com/en/component/zoo/category/pc-audio-codecs-high-definition-audio-codecs-software",
        corporation: "Realtek Semiconductior"
    },
    {
        id: "slimdrivers",
        name: "SlimDrivers",
        img: "/list/slimdrivers.png",
        url: "https://slimdrivers.br.uptodown.com/windows/download",
        corporation: "SlimWare"
    },
    {
        id: "taskbarx",
        name: "Taskbar X",
        img: "/list/taskbarx.png",
        url: "https://github.com/ChrisAnd1998/TaskbarX/releases/",
        corporation: "Chris Andriessen"
    },
    {
        id: "translucent",
        name: "Translucent TB",
        img: "/list/translucent.png",
        url: "https://www.microsoft.com/pt-br/p/translucenttb/9pf4kz2vn4w9",
        corporation: "Charles Milette"
    },
    {
        id: "unetbootin",
        name: "Unetbootin",
        img: "/list/unetbootin.png",
        url: "https://unetbootin.github.io/",
        corporation: "HabitLab"
    },
    {
        id: "virtualbox",
        name: "VirtualBox Oracle VM",
        img: "/list/virtualbox.png",
        url: "https://www.virtualbox.org/wiki/Downloads",
        corporation: "Oracle Corporation"
    },
    {
        id: "winrar",
        name: "WinRAR",
        img: "/list/winrar.png",
        url: "https://www.win-rar.com/download.html",
        corporation: "Eugene Roshal"
    }

]


export default items;