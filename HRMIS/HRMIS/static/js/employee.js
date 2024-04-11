function displayFileName() {
    var fileInput = document.getElementById('file-upload');
    var fileNameDisplay = document.getElementById('file-name-display');
    fileNameDisplay.textContent = fileInput.files[0].name;
}

function uploadProfilePicture() {
    var fileInput = document.getElementById('file-upload');
    var file = fileInput.files[0];
    var userIdString = document.getElementById('upload-btn').getAttribute('data-user-id');  
    console.log(userIdString)
    var userId = parseInt(userIdString);

    if (isNaN(userId)) {
        console.error('Invalid user ID:', userIdString);
        return;
    }

    var formData = new FormData();
    formData.append('profile_picture', file);
    formData.append('user_id', userId);

    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/employee_views/profile_view/');

    var csrfToken = getCookie('csrftoken');
    xhr.setRequestHeader('X-CSRFToken', csrfToken);

    xhr.onload = function () {
        if (xhr.status == 200) {
            location.reload();
            cancelUpload();
            console.log('Upload successful');
        } else {
            console.error('Upload failed');
        }
    };

    xhr.send(formData);
}
function cancelUpload() {
    var modal = document.getElementById('profile-picture-modal');
    modal.classList.add('hidden');
}

function openUploadModal() {
    var modal = document.getElementById('profile-picture-modal');
    if (modal) {
        modal.classList.remove('hidden');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var fileUploadElement = document.getElementById('file-upload');
    var uploadBtnElement = document.getElementById('upload-btn');
    var openModalBtn = document.getElementById('open-modal-btn');

    if (fileUploadElement && uploadBtnElement && openModalBtn) {
        fileUploadElement.addEventListener('change', displayFileName);
        uploadBtnElement.addEventListener('click', uploadProfilePicture);
        openModalBtn.addEventListener('click', openUploadModal);
    }
});

function openPayrollModal() {
    var modal = document.getElementById("payrollModal");
    modal.style.display = "block";
}

function closePayrollModal() {
    var modal = document.getElementById("payrollModal");
    modal.style.display = "none";
}


function openPayslipDetailsModal(payslipId) {
    var payslipDetailsId = `payslipDetailsContent${payslipId}`;
    var selectedPayslipDetails = document.getElementById(payslipDetailsId);
    var payslipDetailsContainer = document.getElementById('payslipDetailsContainer');

    if (selectedPayslipDetails) {
        payslipDetailsContainer.innerHTML = selectedPayslipDetails.innerHTML;

        document.getElementById('payslipDetailsModal').style.display = 'block';
    } else {
        console.error('Payslip details element not found. ID:', payslipDetailsId);
    }
}

function goBackToMainModal() {
    document.getElementById('payslipDetailsModal').style.display = 'none';
    document.getElementById('payrollModal').style.display = 'block';
}

function closePayslipDetailsModal() {
    document.getElementById('payslipDetailsModal').style.display = 'none';
    document.getElementById('payrollModal').style.display = 'none';
}

function openAttendanceModal() {
    // Get the modal element
    var modal = document.getElementById("attendanceModal");
    
    // Show the modal
    modal.style.display = 'block';
    modal.style.remove = 'hidden';
}

function adjustModalSize() {
    var modal = document.getElementById('attendanceModal');
    var modalContent = modal.querySelector('.modal-content');
    var windowHeight = window.innerHeight;
    var windowWidth = window.innerWidth;
    var maxModalHeight = windowHeight * 0.99; // Adjust this value as needed
    var maxModalWidth = windowWidth * 0.99; // Adjust this value as needed
    var contentHeight = modalContent.offsetHeight;
    var contentWidth = modalContent.offsetWidth;
    var padding = 20; // Adjust this value as needed

    // Set maximum height and width for the modal content
    modalContent.style.maxHeight = (maxModalHeight - padding) + 'px';
    modalContent.style.maxWidth = (maxModalWidth - padding) + 'px';

    // Check if the content height exceeds the window height
    if (contentHeight + padding > windowHeight) {
        // If content height exceeds window height, set modal height to fit content
        modalContent.style.height = (windowHeight - padding) + 'px';
    }

    // Check if the content width exceeds the window width
    if (contentWidth + padding > windowWidth) {
        // If content width exceeds window width, set modal width to fit content
        modalContent.style.width = (windowWidth - padding) + 'px';
    }
}

// Call the function initially and on window resize
window.onload = adjustModalSize;
window.onresize = adjustModalSize;

function closeAttendanceModal() {
    // Get the modal element
    var modal = document.getElementById("attendanceModal");
    
    // Hide the modal
    modal.style.display = 'none';
}

function downloadPdf() {
    // Show the attendance modal
    $('#attendanceModal').show();

    // Wait for the modal to be fully shown
    setTimeout(function() {
        // Capture the PDF content
        const element = document.getElementById('attendanceModal');

        // Use html2pdf to generate the PDF
        html2pdf(element, {
            margin: 5,
            filename: 'Daily Time Record.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'mm', format: [162, 125], orientation: 'portrait' },
            onAfterPdf: function (pdf) {
                // Hide the attendance modal after PDF generation
                $('#attendanceModal').hide();
            }
        });
    }, 500); // Adjust the delay if necessary
}
