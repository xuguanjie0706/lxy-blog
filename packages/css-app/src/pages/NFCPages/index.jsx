import './index.scss';
const NFCPages = () => {

    const ndef = new window.NDEFRecord();
    console.log(ndef);
    // ndef
    // .scan()
    // .then(() => {
    //     console.log("Scan started successfully.");
    //     ndef.onreadingerror = (event) => {
    //     console.log(
    //         "Error! Cannot read data from the NFC tag. Try a different one?",
    //     );
    //     };
    //     ndef.onreading = (event) => {
    //     console.log("NDEF message read.");
    //     };
    // })
    // .catch((error) => {
    //     console.log(`Error! Scan failed to start: ${error}.`);
    // });
  return <>
    
  </>
}
export default NFCPages