class modeCalculations {
    __updateModeCount(modeMap, number) {
        if (modeMap[number] === undefined) {
            modeMap[number] = 1
        } else {
            modeMap[number]++
        }
    }

    __updateMaxMode(modeMap, number, maximumCount) {
        if (modeMap[number] > maximumCount) {
            return number
        }
        return
    }
}