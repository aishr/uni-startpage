interface DockIcon {
    title: string,
    imgSrc: string,
    link: string,
    id: string, 
    search?: string
}

const dockIcons:Record<string, DockIcon> = {
    fb: {
        title: "Facebook",
        imgSrc: "fblogo.png",
        link: "https://fb.com", 
        id: "fb"
    },
    m: {
        title: "Messenger",
        imgSrc: "msngr.png",
        link: "https://messenger.com",
        id: "m"
    },
    pl: {
        title: "Plex",
        imgSrc: "plex.png",
        link: "https://plex.joshwolfe.ca",
        id: "pl",
        search: "#!/search?query="
    },
    wa: {
        title: "Whatsapp",
        imgSrc: "whatsapp.png",
        link: "https://web.whatsapp.com",
        id: "wa"
    },
    yt: {
        title: "YouTube",
        imgSrc: "yt.png",
        link: "https://youtube.com",
        id: "yt",
        search: "results?search_query=" 
    },
    li: {
        title: "LinkedIn",
        imgSrc: "linkedin.png",
        link: "https://linkedin.com",
        id: "li"
    },
    gh: {
        title: "Github",
        imgSrc: "github.png",
        link: "https://github.com",
        id: "gh",
        search: "search?q="
    },
    tci: {
        title: "Travis",
        imgSrc: "travis.png",
        link: "https://travis-ci.com",
        id: "tci",
        search: "search/"
    },
    gd: {
        title: "Drive",
        imgSrc: "drive.png",
        link: "https://drive.google.com",
        id: "gd",
        search: "drive/search?q="
    },
    gm: {
        title: "Gmail",
        imgSrc: "gmail.png",
        link: "https://gmail.com",
        id: "gm",
        search: "mail/u/0/#search/"
    },
    gc: {
        title: "Google Calendar",
        imgSrc: "calendar.png",
        link: "https://calendar.google.com",
        id: "gc"
    },
    uwm: {
        title: "UWaterloo Mail",
        imgSrc: "mail.png",
        link: "https://connect.uwaterloo.ca",
        id: "uwm"
    },
    q: {
        title: "Quest",
        imgSrc: "uwaterloo.png",
        link: "https://quest.pecs.uwaterloo.ca/psp/SS/ACADEMIC/SA/?cmd=login",
        id: "q"
    },
    ol: {
        title: "Overleaf",
        imgSrc: "overleaf.png",
        link: "https://overleaf.com",
        id: "ol"
    },
    dh: {
        title: "Docker Hub",
        imgSrc: "docker-hub.png",
        link: "https://hub.docker.com",
        id: "dh",
        search: "/search?q="
    },
}

export default dockIcons;