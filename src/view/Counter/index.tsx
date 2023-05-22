import { observer } from "mobx-react-lite";
import counter from "../../store/Counter";
import FlexBox from "./../../components/sharedStyledComponents/FlexBox";
import Button from "../../components/UI/Button";

const Counter = observer(() => {
    return (
            <FlexBox margin="25px 0 0 0" flexDirection="column" alignItems="center" >
                <h2>Counter</h2>
                <FlexBox width="200px" justifyContent="space-between">
                    <Button clickHandler={() => counter.increment()}>+</Button>
                    <Button clickHandler={() => counter.decrement()}
                    backgroundColor="#ef5a5a"
                    hoverBackgroundColor="#ffa952">-</Button>
                </FlexBox>

                <div>Count: {counter.count}</div>
            </FlexBox>
    )
})
export default Counter