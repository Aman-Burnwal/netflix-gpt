const Title = () => {

  const Title = "Elemental";

  const discprition = "elemental is a moveis sladkja faldj al;jfoas jfoDAH GOLDAK VLASJK LASJFLADS JLASSJLAS FSA KL FDJ FALKJFLKJFDA FAFDJKALF JfeiowjAJFNAL FJVA VPASOJEO FAKJJWOEIAJF SDA";
  return (
    <div className=" absolute w-screen h-screen bg-gradient-to-r from-black ">
      <div className="text-white mt-80  w-1/3 ml-20  flex flex-col gap-3">
        
        <h2 className="font-bold text-3xl">{Title}</h2>
        <p>{discprition}</p>
        <div className="flex flex-row gap-3 ">
          <button className="text-black bg-gray-500 rounded py-1 px-6 font-semibold">Play</button>
          <button className="text-black bg-gray-500 rounded py-1 px-6 font-semibold">More info</button>
        </div>

      </div>
      
    </div>
  )
}
export default Title