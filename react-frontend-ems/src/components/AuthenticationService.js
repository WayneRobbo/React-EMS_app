class AuthenticationService {
    registerSuccesfulLogin(username,password){
        console.log("succesful login");
        sessionStorage.setItem('authenticatedUser', username);
    }

    logoutSuccessful(username, password){
        console.log("succeful logout");
        sessionStorage.removeItem('authenticatedUser',username);
    }

    getUsername(username, password){
        let name = sessionStorage.getItem('authenticatedUser');
        if(name==="admin") {
            return true
        }else{
            return false
        }
    }

    isUserLoggedIn(){
        let user = sessionStorage.getItem('authenticatedUser')
        if(user===null) {
            return false
        }else{
            return true
        }
    }
}
export default new AuthenticationService()