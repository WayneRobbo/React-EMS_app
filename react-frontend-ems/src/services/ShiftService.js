import axios from 'axios';

const SHIFT_API_BASE_URL = "http://localhost:8080/api/v1/shifts";

class ShiftService{
    
    getShifts(){
        return axios.get(SHIFT_API_BASE_URL);
    }

    createShift(shift){
        return axios.post(SHIFT_API_BASE_URL, shift);

    }

}
export default new ShiftService()