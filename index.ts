import {app} from './app'

const PORT = process.env.PORT || 3000

console.log("🏃‍Running backend...")

app.listen(PORT, () =>{
    console.log("🏁Backend is now running on port " + PORT)
})