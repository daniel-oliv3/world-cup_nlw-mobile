import { Button as ButtonNativeBase, Text, IButtonProps } from 'native-base';

interface Props extends IButtonProps {
    title: string;
    type?: 'PRIMARY' | 'SECONDARY';
}

/* ======= Component Button ======= */
export function Button({ title, type = 'PRIMARY', ...rest }: Props){
    return (
        <ButtonNativeBase
            w="full"
            h={14}
            rounded="sm"
            fontSize="md"
            textTransform="uppercase"
            bg={type === 'SECONDARY' ? 'red.500' : 'yellow.500'} 
            {...rest}
        >
            <Text>
                {title}
            </Text>
        </ButtonNativeBase>
    );
}

