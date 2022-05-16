import Box from "../../../styles/Box"
import Btn from "../../../styles/Btn";


const ChoiceMonthlyYearly = ({setIsChoiceMonthly, setIsChoiceYearly}) => {

    const onClickChoiceMonthly = () => {
        setIsChoiceMonthly(true)
        setIsChoiceYearly(false)
    }

    const onClickChoiceYearly = () => {
        setIsChoiceMonthly(false)
        setIsChoiceYearly(true)
    }

    return (
        <Box
            // border={'orange 2px solid'}
            bg={'colorLight'}
            p={3}
            display={'flex'}
            justifyContent={'space-between'}
            alignContent={'center'}
            alignItems={'center'}
            borderRadius={24}
        >
            <Btn variant={'colorLightFromTheme'}  onClick={onClickChoiceMonthly}>Monthly</Btn>
            <Btn variant={'colorLightFromTheme'}  onClick={onClickChoiceYearly}>Yearly</Btn>
        </Box>
    );
}

export default ChoiceMonthlyYearly;

