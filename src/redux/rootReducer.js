 import {combineReducers} from 'redux'

 import addUser from '../forms/addUser/reducer'
 import addProfile from '../forms/addProfile/reducer'

 export default combineReducers( {
   addUser,
   addProfile
 })
