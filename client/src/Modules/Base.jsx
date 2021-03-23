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

}

export default new Base();