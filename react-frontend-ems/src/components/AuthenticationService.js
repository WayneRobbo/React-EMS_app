class AuthenticationService {

    registerSuccesfulLogin(username,password){
        sessionStorage.setItem('authenticatedUser', username);
    }

    logoutSuccessful(username, password){
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