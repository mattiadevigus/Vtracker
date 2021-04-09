class Base {
    getIp = () => {
        let ipv4 = window.location.host
        ipv4 = ipv4.split(":");
        return ipv4[0];
    }

    getFormattedTrackName = (trackname) => {
        let name = trackname.split("_");
        return name[0];
    }

    getPort = () => {
        let ipv4 = window.location.host;
        let port = ipv4.split(":");
        console.log(port)
        /* return port[1]; */
        return 9000;
    }
}

export default new Base();