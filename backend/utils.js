const getErrorMessage = (err)=>{
    console.log(err?.message)
    let error = err?.message.split(":")
    return `${error[1].trim()}: ${error[2]?.trim()}`
}

module.exports = {getErrorMessage}