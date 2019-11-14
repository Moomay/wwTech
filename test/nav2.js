$('#s1').on('inview', function (event, isInView) {
    if (isInView) {
        next(10);
    } else {
        next(35);
    }
});
$('#s2').on('inview', function (event, isInView) {
    if (isInView) {
        
    } else {
        console.log("out of s2");
    }
});
$('#s3').on('inview', function (event, isInView) {
    if (isInView) {
        next(60);
    } else {
        next(85);
    }
});
$('#s4').on('inview', function (event, isInView) {
    if (isInView) {
        
    } else {
        console.log("out of s4");
    }
});

