import React, { useState } from "react";

function ProfileImg () {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleProfileClick = () => {
      setIsModalOpen(true);
    };
  
    const handleFileChange = (e) => {
      // 여기에서 새로운 파일을 업로드하거나 다른 프로필 변경 로직을 구현합니다.
      // 이 예제에서는 콘솔에 선택한 파일의 이름을 출력합니다.
      const selectedFile = e.target.files[0];
      console.log('Selected File:', selectedFile.name);
  
      // 변경이 완료되면 모달을 닫습니다.
      setIsModalOpen(false);
    };

    return(
        <>
            <div>
                <div
                    style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    backgroundColor: '#383838',
                    cursor: 'pointer',
                    }}
                    onClick={handleProfileClick}
                >
                    {/* 여기에 프로필 이미지를 표시하거나 이미지 컴포넌트를 추가하세요. */}
                </div>

                {isModalOpen && (
                    <div
                    style={{
                        position: 'fixed',
                        top: '0',
                        left: '0',
                        width: '100%',
                        height: '100%',
                        background: 'rgba(0, 0, 0, 0.5)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    >
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        style={{ display: 'none' }}
                        ref={(fileInput) => fileInput && fileInput.click()}
                    />
                    <p style={{ color: 'white', textAlign: 'center' }}>클릭!</p>
                </div>
                )}
            </div>
        </>
    );
}

export default ProfileImg;