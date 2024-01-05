import FirstComponent from './FirstComponent';
import {FifthComponent} from './FirstComponent';
import SecondComponent from './SecondComponent';
import ThirdComponent from './ThirdComponent';
import FourthComponent from './FourthComponent';
import LearningJavaScript from './LearningJavaScript';

export default function LearningComponent(){
    return (
        <div className="LearingComponent">
            <FirstComponent/>   {/* short syntax */}
          <SecondComponent></SecondComponent>
          <ThirdComponent></ThirdComponent>
         <FourthComponent></FourthComponent>
         <FifthComponent></FifthComponent>
         <LearningJavaScript/>
        </div>
    );
}