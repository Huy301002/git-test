import { Container,TextInput,Select,Textarea,Button, Icon} from "react-materialize";
export default function Contact(){
    const handleSubmit = (e) =>{
        e.preventDefault();
    }
    return(
     
    <Container>
        <h3>Contact us</h3>
        <form onSubmit={handleSubmit}>
            <TextInput id="TextInput-38" label="Your Name"/>
            <TextInput id="TextInput-39" label="Your phone"/>
            <TextInput id="TextInput-41" label="Email" validate/>
            <Select id='Select-46' multiple={false} onChange={function noRefCheck(){}} value="">
                <option disabled value=''>
                    Choose your favourite Film
                </option>
                <option value='1'>
                north 
                </option>
                <option value='2'>
                central    
                </option>
                <option value='3'>
                southern
                </option>
            </Select>
            <Textarea icon={<Icon></Icon>} id="Textarea-28" label="Your content" />
            <Button>Sumbit</Button>
        </form>
    </Container>
    )
}