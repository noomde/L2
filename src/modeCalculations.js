/**
 * 
 */
export class modeCalculations {
    static updateModeCount(modeMap, number) {
        if (modeMap[number] === undefined) {
            modeMap[number] = 1
        } else {
            modeMap[number]++
        }
    }

    static updateMaxMode(modeMap, number, maximumCount) {
        if (modeMap[number] > maximumCount) {
            maximumCount = modeMap[number]
            return number
        }
        return
    }
}