import styled from "styled-components";
export const Shopping = styled.div`
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  height: 350px;
  width: 1050px;
  display: flex;
  overflow-x: auto;
  margin-bottom: 10px;
`;

export const TimerContainer = styled.div` 
width: 525px;
height: 350px;
display: flex;
align-items: center;
justify-content:center ;
`;


export const Timer = styled.div` 
width: 300px;
height: 120px;
border: white 3px solid;
border-radius: 5px;
display: flex;
p{
    font-size: 30px;
    font-weight: 800;
    font-family: "poppins";
    color: white;
}

`;

const TimerSection = styled.section`
height: 120px;
width: 100px;
display: flex;
flex-direction: column;
`
const TimerDate = styled.section`
width: 100px;
height: 60px;display: flex; align-items: center; justify-content: center;
p{
    color: white;
    font-size: 50px;
    font-family: 'poppins';
    font-weight: 500;
}
`;
const TimerDateDescription = styled.section`
width: 100px;
height: 60px;
display: flex;
align-items: center;
justify-content: center;

p{
    color: white;
    font-size: 24px;
    font-family: 'poppins';
    font-weight: 800;
}
`;


export const Sofa = () => {
    return (
        <Shopping >
            <TimerContainer ><Timer >
                <TimerSection>
                    <TimerDate><p>12</p>    </TimerDate>
                    <TimerDateDescription><p> month</p> </TimerDateDescription>
                </TimerSection>
                <TimerSection>
                    <TimerDate><p>03</p>    </TimerDate>
                    <TimerDateDescription> <p>days</p> </TimerDateDescription>
                </TimerSection>
                <TimerSection>
                    <TimerDate><p>12</p>    </TimerDate>
                    <TimerDateDescription> <p>hours</p> </TimerDateDescription>
                </TimerSection>
            </Timer>
            </TimerContainer>

        </Shopping>
    )

};
