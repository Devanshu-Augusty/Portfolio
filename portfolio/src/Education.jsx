import './css/education.css';
import { LuGraduationCap } from 'react-icons/lu'

const Education = () => {
    return (
        <>
            <div className="line">

                <div className="container left-container">
                    <div className="outline">
                        <div className="img"><LuGraduationCap /></div>
                    </div>
                    <div className="text-box">
                        <h2>BCA</h2>
                        <small>2020 - 23</small>
                        <p>Govt. College solan</p>
                        <span className="left-container-arrow"></span>
                    </div>
                </div>

                <div className="container right-container">
                    <div className="outline">
                        <div className="img"><LuGraduationCap /></div>
                    </div>
                    <div className="text-box">
                        <h2>12th (Non-Medical)</h2>
                        <small>2019 - 20</small>
                        <p>Kendriya Vidyalaya Subathu</p>
                        <span className="right-container-arrow"></span>
                    </div>
                </div>

                <div className="container left-container">
                    <div className="outline">
                        <div className="img"><LuGraduationCap /></div>
                    </div>
                    <div className="text-box">
                        <h2>10th</h2>
                        <small>2017 - 18</small>
                        <p>Kendriya Vidyalaya Subathu</p>
                        <span className="left-container-arrow"></span>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Education;