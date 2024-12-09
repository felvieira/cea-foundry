import styled from 'styled-components';

export const DialogOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const DialogContent = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border-radius: 8px;
  padding: 24px;
  width: 100%;
  max-width: 480px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const DialogHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;

  h2 {
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const DialogActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  gap: 12px;
`; 