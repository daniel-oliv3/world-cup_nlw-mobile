import { Button as ButtonNativeBase, Text, IButtonProps } from 'native-base';

interface Props extends IButtonProps {
    title: string;
}

/* ======= Component Button ======= */
export function Button({ title, ...rest }: Props){
    return (
        <ButtonNativeBase {...rest}>
            <Text>
                {title}
            </Text>
        </ButtonNativeBase>
    );
}

