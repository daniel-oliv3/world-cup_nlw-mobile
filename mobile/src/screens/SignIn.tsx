import { Center, Text, Icon } from "native-base";
import Logo from '../assets/logo.svg';
import { Button } from "../components/Button";
import { useAuth } from '../hooks/useAuth';
import { Fontisto } from '@expo/vector-icons';


/* ======= SignIn ======= */
export function SignIn() {
  const { signIn, user } = useAuth();

  /*console.log('Dados do úsuario => ', user);*/

  return (
      <Center flex={1} bgColor="gray.900" p={7}>
        <Logo  width={212} height={40}/>

        <Button
          mt={12} 
          title="ENTRAR COM GOOGLE"
          leftIcon={<Icon as={Fontisto} name="google" color="white" size="md" />}
          type="SECONDARY"
          onPress={signIn}
        />

      <Text color="white" textAlign="center" mt={4}>
        Não utilizamos nenhuma informação além {'\n'} do seu e-mail para criação de sua conta.
      </Text>

      </Center>
  );
}
