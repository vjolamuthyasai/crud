import axios from "axios";
import { environment } from "../environments/environment";
import { processUsers } from "../utilities/UserUtility";

const getUsers = (setUsers) => {
    axios
    .get(environment?.baseUrl)
    .then((result)=>{
        processUsers(result?.data)
    })
}