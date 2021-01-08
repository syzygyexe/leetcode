const moveZeroes = (nums) => {
    // 0 stand for the index
    let anchor = 0;
    
    for (let explorer = 0; explorer < nums.length; explorer++) {
        // Swap explorer and anchor elements if the value is not 0
        if (nums[explorer] !== 0) {
            // temporariry store anchor index value in temp variable
            let temp = nums[anchor];
            // Move anchor index value to the explorer index value
            // Basically move 0 from anchor to any number which is
            // under explorer
            nums[anchor] = nums[explorer];
            // Move explorer index value to the temp variable,
            // which contains current anchor index value.
            // Basically move any explored number to the current anchors 0.
            nums[explorer] = temp;
            
            // advance anchor further to the next index when explorer
            // index value was not equal to 0.
            anchor++
            }
    }
};
