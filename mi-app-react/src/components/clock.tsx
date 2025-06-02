import { useState } from "react";
import { ExternalBorder, Buttons, Button, InternalBorder, Time, Seconds, Switch, PowerIcon, TimeIcon, TimerIcon, StartIcon, PauseIcon, InternalBorderContent } from "../styles/clockStyles"

export const Clock: React.FC = () => {
    const [clockState, setClockState] = useState(false)
    const [isTimer, setIsTimer] = useState(false)

    const SwitchState = () => {
        setClockState(!clockState)
        setIsTimer(false)
    }

    const SwitchMode = () => {
        setIsTimer(!isTimer)
    }

    return <>
        <ExternalBorder>
            <Switch onClick={() => SwitchState()}>
                <PowerIcon state={clockState} size={10} />
            </Switch>
            <InternalBorder state={clockState}>  
                <InternalBorderContent disabled={!clockState}>        
                    <Buttons>
                        <Button disabled={!isTimer}>
                            <StartIcon state={clockState} size={20}></StartIcon>
                        </Button>
                        <Button disabled={!isTimer}>
                            <PauseIcon state={clockState} size={20}></PauseIcon>
                        </Button>
                        <Button disabled={false} onClick={() => SwitchMode()}>{!isTimer ? (
                            <TimeIcon state={clockState} size={20}></TimeIcon>
                            ) : 
                            <TimerIcon state={clockState} size={20}></TimerIcon>}
                        </Button>
                    </Buttons>
                    <Time>09:59</Time>
                    <Seconds>54:34</Seconds>
                </InternalBorderContent>   
            </InternalBorder>
        </ExternalBorder>
    </>
}