//

const express = require('express')
const connectDB = require('./dataBase.js')
const moveClassModel = require('./models/moveClass.js')
const cors = require('cors')
const iRoutes = require('./routes/instructorRoutes.js')
const mRoutes = require('./routes/moveClassRoutes.js')
const userRoutes = require('./routes/userRoutes.js')

const app = express()
app.use(express.json())
app.use(cors())

app.use('/instructors', iRoutes)
app.use('/moves', mRoutes)
app.use('/users', userRoutes);


connectDB()

// app.get('/', async (req,res) => {
//     const response = await moveClassModel.find()
//     return res.json({moveClasses : response})
// })



app.listen(3000, () => {
    console.log("app is running");
})




// const express = require('express')
// const app= express()

// // Array containing MoveClass objects


// app.get("/api/moveClasses",(req,res) => {
//     const moveClasses = [
//         { id: 1, instructorName: 'Kathleen Carm', type: 'dance class - Bada Lee, Smoker', youtubeUrl: 'https://youtu.be/LAPhcK-38aY?si=YraOLZnp0Ol2g7oK', difficulty: 7 },
//         { id: 2, instructorName: 'LEIA', type: 'dance class - NewJeans, Super Shy', youtubeUrl: 'https://youtu.be/ChXfwacbkwI?si=NvDiEB0VY75_dzsp', difficulty: 7 },
//         { id: 3, instructorName: 'Ellen', type: 'dance class - BlackPink, Shut Down', youtubeUrl: 'https://youtu.be/-Y_n2RxTXyc?si=Edj9QeiDGoEhGgRc', difficulty: 8 },
//         { id: 4, instructorName: 'LEIA', type: 'dance class - KAI, Rover', youtubeUrl: 'https://youtu.be/tsHebpUKrOA?si=iVLs6Sjj9_IOEY2n', difficulty: 8 },
//         { id: 5, instructorName: 'Aloha', type: 'dance class - LESSERAFIM, Easy', youtubeUrl: 'https://youtu.be/hG96IxiWnzs?si=OOdEmwAnjpuZqbt9', difficulty: 6 },
//         { id: 6, instructorName: 'Kathleen Carm', type: 'dance class - NMIX, Dash', youtubeUrl: 'https://youtu.be/1wpE4ZJWQ5Q?si=A0XOzsh7uV93TUxD', difficulty: 9 },
//         { id: 7, instructorName: 'Kathleen Carm', type: 'dance class - Stray Kids, LALALALA', youtubeUrl: 'https://youtu.be/euaGRK-ZylM?si=ZWkG1b9vEU6IVXwK', difficulty: 5 },
//         { id: 8, instructorName: 'Kathleen Carm', type: 'dance class - TXT, Chasing that feeling', youtubeUrl: 'https://youtu.be/KpM2r-OYWWQ?si=a_RNIogtcb4MnE56', difficulty: 5 }
//     ];

//     res.json(moveClasses);
// });

// app.listen(5000,() => {console.log("Server started on port 5000")})