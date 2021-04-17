import axios from 'axios';

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
        /* return port[1]; */
        return 9000;
    }

    checkLogin = () => {
        let params = {
            username: sessionStorage.getItem("username")
        }
        axios.post(`http://${this.getIp()}:${this.getPort()}/Checklogin`, params)
        .then((res) => {
            if(res.data !== true) {
                window.location.replace("/Login");
            }
        })
    }
}

export default new Base();