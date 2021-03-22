import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()

function notify(msg: string, status: number) {
    if ( status >= 200 && status < 299) {
        toast.success(msg, { autoClose: 1500, pauseOnHover: false, hideProgressBar: true })
    } else {
        toast.error(msg, { autoClose: 1500, pauseOnHover: false, hideProgressBar: true })
    }
}

export { notify }