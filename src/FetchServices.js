import axios from 'axios'

const postData = async (url, body) => {
    alert(url)
    try {
        var response = await axios.post(url, body)
        return response.data
    }
    catch (e) {
        return e.response.data
    }

}

const getData = async (url, body) => {
    alert(url)
    try {
        var response = await axios.get(url,{
            headers: {
                'Authorization': '4ccda7514adc0f13595a585205fb9761'
            },
        })// its your choice you want to use or not method ,mode ,headers in getData
        var result = response.data;
        return result
    }
    catch (e) {
        return e.response.data
    }

}


export { postData, getData }