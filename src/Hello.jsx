function Hello()
{
    let name="NandiniDas";
    let fullName=()=>{
        return name;
    }
    return (
        <h3>
            It's me {fullName()}
        </h3>
    );
}

export default Hello;
