import os from 'os'

interface status {
    data: Date,
    upTime: number,
    hostName: string
}

function status(): status {
    return {
        data: new Date(),
        upTime: os.uptime(),
        hostName: os.hostname()
    }
}

export { status }