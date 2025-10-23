        document.getElementById('image').addEventListener('change', function () {
            const uploadText = document.getElementById('uploadText');
            if (this.files.length > 0) {
                uploadText.textContent = this.files[0].name;
            } else {
                uploadText.textContent = 'Click để tải ảnh lên';
            }
        });

        document.getElementById('infoForm').addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const age = document.getElementById('age').value;
            const gender = document.querySelector('input[name="gender"]:checked').value;
            const university = document.getElementById('university').value;

            const hobbies = [];
            document.querySelectorAll('.hobbies input:checked').forEach(hobby => {
                hobbies.push(hobby.value);
            });

            const imageFile = document.getElementById('image').files[0];
            const reader = new FileReader();

            reader.onload = function () {
                const container = document.querySelector('.container');
                container.innerHTML = `
          <div class="profile-card">
            <h1>Thông tin cá nhân</h1>
            <img src="${reader.result}" alt="Ảnh cá nhân">
            <div class="title-card">
              <h3>${name}</h3>
              <p><strong>Tuổi:</strong> ${age}</p>
              <p><strong>Giới tính:</strong> ${gender}</p>
              <p><strong>Trường:</strong> ${university}</p>
              <p><strong>Sở thích:</strong> ${hobbies.join(', ') || 'Không có'}</p>
            </div>
          </div>
        `;
            };

            if (imageFile) {
                reader.readAsDataURL(imageFile);
            }
        });
