import useInput from "./useInput";

export default function PersonalInfo() {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");

     const [firstName, bindFirstName , resetFirstName] = useInput('');
     const [lastName, bindLastName , resetLastName] = useInput('');

  const submitForm = (e) => {
    e.preventDefault();
    alert (`merhaba ${firstName} ${lastName}`)
    resetFirstName();
    resetLastName();
  }

  return (
    <>
      <div>
        <form onSubmit={submitForm}>
          <div>
            <label>
              Ad
              <input
                type="text"
                {... bindFirstName}
              />
            </label>
          </div>
          <div>
            <label>
              Soyad
              <input
                type="text"
                {... bindLastName}
              />
            </label>
          </div>
          <button>Kaydet</button>
        </form>
      </div>
    </>
  );
}