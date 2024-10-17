import React from 'react'
import {useEffect} from 'react'
import WorkoutDetails from '../components/WorkoutDetails';
import WorkoutForm from '../components/WorkoutForm';
import {useWorkoutContext} from '../hooks/useWorkoutContext'
import { useAuthContext } from '../hooks/useAuthContext';

function Home() {
    // const [workouts, setWorkouts] = useState(null);
    const { workouts, dispatch} = useWorkoutContext()
    const {user} = useAuthContext()

    useEffect(() =>{
        const fetchWorkouts = async () =>{
            const response = await fetch('/api',{
              headers:{
                'Authorization': `Bearer ${user.token}`
              }
            })
            // console.log(response)
            // console.log(response.json)
            const json = await response.json()

            if(response.ok){
                // setWorkouts(json)
                dispatch({
                  type:'SET_WORKOUTS',
                  payload:json
                })
            }
        }
        if(user){
        fetchWorkouts()
        }
    },[dispatch])
  return (
    <div className='home'>
     <div className="workouts">
       { workouts && workouts.map((workout)=> (
       <WorkoutDetails key={workout._id} workout={workout}/>
       ))}
     </div>
     <WorkoutForm/>
    </div>
  )
}

export default Home
