const rulesDiagonalBlack = {

    ruleUpRight(event, cellLineEasyMode, cellcolumnEasyMode) {

        if (easyMode.easyMode === true) {
            cellLine = cellLineEasyMode;
            cellColumn = cellcolumnEasyMode;
        } else if (computerMode.putPieceComputer === true) {
            cellLine = Number(cellLineEasyMode);
            cellColumn = Number(cellcolumnEasyMode);
        } else {

            cellLine = Number(event.currentTarget.id.split('')[0]);
            cellColumn = Number(event.currentTarget.id.split('')[1]);
        }

        let compteur = -1;
        const cellTargetUpRight = document.getElementById(`${cellLine - 1}${cellColumn + 1}_cell`);


        //---------------to check if white piece towardt left--------------//
        for (let i = cellColumn + 1, y = cellLine - 1; i < 9 && y > 0; i++, y--) {
            const cellNextUpRight = document.getElementById(`${y}${i}_cell`);
            compteur++;


            //----------- Check if there is a piece on the cell ---------------//
            if (cellNextUpRight != null) {
                if (cellNextUpRight.children.length === 1) {
                    //------------if white Piece -> turn over black piece ------------------//
                    if (cellNextUpRight.className.slice(11).trim() === 'cellBlackPiece' && cellTargetUpRight.className.slice(11).trim() !== 'cellBlackPiece') {

                        //------------ Check Potential position for EasyMode ----------------//
                        if (easyMode.easyMode === true && computerMode.putPieceComputer === false) {
                            easyMode.saveCellPieces(cellLineEasyMode, cellcolumnEasyMode);
                            return
                        }

                        //-------------- turn over black piece -> white piece --------------//
                        for (let i = cellColumn + 1, y = cellLine - 1, iCompteur = 0; iCompteur < compteur; i++, y--, iCompteur++) {
                            document.getElementById(`${y}${i}_cell`).classList.add('cellBlackPiece')
                            document.getElementById(`${y}${i}_cell`).classList.remove('cellWhitePiece');

                            document.getElementById(`${y}${i}_cell`).children[0].classList.add('blackPiece');
                            document.getElementById(`${y}${i}_cell`).children[0].classList.remove('whitePiece');

                            document.getElementById(`${y}${i}_cell`).children[0].classList.add('blackPiece--anim');
                            document.getElementById(`${y}${i}_cell`).children[0].classList.remove('whitePiece--anim');
                        }
                        movePiece.counterRule++;
                        movePiece.putPiece(event);
                        break;
                    }
                } else {
                    break;
                }
            } else {
                break;
            }
        }
    },

    ruleUpLeft(event, cellLineEasyMode, cellcolumnEasyMode) {

        if (easyMode.easyMode === true) {
            cellLine = cellLineEasyMode;
            cellColumn = cellcolumnEasyMode;
        } else if (computerMode.putPieceComputer === true) {
            cellLine = Number(cellLineEasyMode);
            cellColumn = Number(cellcolumnEasyMode);
        } else {

            cellLine = Number(event.currentTarget.id.split('')[0]);
            cellColumn = Number(event.currentTarget.id.split('')[1]);
        }
        let compteur = -1;
        const cellTargetUpLeft = document.getElementById(`${cellLine - 1}${cellColumn - 1}_cell`);


        //---------------to check if white piece towardt left--------------//
        for (let i = cellColumn - 1, y = cellLine - 1; i < 9 && y > 0; i--, y--) {
            const cellNextUpLeft = document.getElementById(`${y}${i}_cell`);
            compteur++;


            //----------- Check if there is a piece on the cell ---------------//
            if (cellNextUpLeft != null) {
                if (cellNextUpLeft.children.length === 1) {
                    //------------if white Piece -> turn over black piece ------------------//
                    if (cellNextUpLeft.className.slice(11).trim() === 'cellBlackPiece' && cellTargetUpLeft.className.slice(11).trim() !== 'cellBlackPiece') {

                        //------------ Check Potential position for EasyMode ----------------//
                        if (easyMode.easyMode === true && computerMode.putPieceComputer === false) {
                            easyMode.saveCellPieces(cellLineEasyMode, cellcolumnEasyMode);
                            return
                        }
                        //-------------- turn over black piece -> white piece --------------//
                        for (let i = cellColumn - 1, y = cellLine - 1, iCompteur = 0; iCompteur < compteur; i--, y--, iCompteur++) {
                            document.getElementById(`${y}${i}_cell`).classList.add('cellBlackPiece')
                            document.getElementById(`${y}${i}_cell`).classList.remove('cellWhitePiece');

                            document.getElementById(`${y}${i}_cell`).children[0].classList.add('blackPiece');
                            document.getElementById(`${y}${i}_cell`).children[0].classList.remove('whitePiece');

                            document.getElementById(`${y}${i}_cell`).children[0].classList.add('blackPiece--anim');
                            document.getElementById(`${y}${i}_cell`).children[0].classList.remove('whitePiece--anim');
                        }
                        movePiece.counterRule++;
                        movePiece.putPiece(event);
                        break;
                    }
                } else {
                    break;
                }
            } else {
                break;
            }
        }
    },

    ruleDownLeft(event, cellLineEasyMode, cellcolumnEasyMode) {

        if (easyMode.easyMode === true) {
            cellLine = cellLineEasyMode;
            cellColumn = cellcolumnEasyMode;
        } else if (computerMode.putPieceComputer === true) {
            cellLine = Number(cellLineEasyMode);
            cellColumn = Number(cellcolumnEasyMode);
        } else {

            cellLine = Number(event.currentTarget.id.split('')[0]);
            cellColumn = Number(event.currentTarget.id.split('')[1]);
        }

        let compteur = -1;
        const cellTargetDownLeft = document.getElementById(`${cellLine + 1}${cellColumn - 1}_cell`);


        //---------------to check if white piece towardt left--------------//
        for (let i = cellColumn - 1, y = cellLine + 1; i < 9 && y > 0; i--, y++) {
            const cellNextDownLeft = document.getElementById(`${y}${i}_cell`);
            compteur++;


            //----------- Check if there is a piece on the cell ---------------//
            if (cellNextDownLeft != null) {
                if (cellNextDownLeft.children.length === 1) {
                    //------------if white Piece -> turn over black piece ------------------//
                    if (cellNextDownLeft.className.slice(11).trim() === 'cellBlackPiece' && cellTargetDownLeft.className.slice(11).trim() !== 'cellBlackPiece') {

                        //------------ Check Potential position for EasyMode ----------------//
                        if (easyMode.easyMode === true && computerMode.putPieceComputer === false) {
                            easyMode.saveCellPieces(cellLineEasyMode, cellcolumnEasyMode);
                            return
                        }
                        //-------------- turn over black piece -> white piece --------------//
                        for (let i = cellColumn - 1, y = cellLine + 1, iCompteur = 0; iCompteur < compteur; i--, y++, iCompteur++) {
                            document.getElementById(`${y}${i}_cell`).classList.add('cellBlackPiece')
                            document.getElementById(`${y}${i}_cell`).classList.remove('cellWhitePiece');

                            document.getElementById(`${y}${i}_cell`).children[0].classList.add('blackPiece');
                            document.getElementById(`${y}${i}_cell`).children[0].classList.remove('whitePiece');

                            document.getElementById(`${y}${i}_cell`).children[0].classList.add('blackPiece--anim');
                            document.getElementById(`${y}${i}_cell`).children[0].classList.remove('whitePiece--anim');
                        }
                        movePiece.counterRule++;
                        movePiece.putPiece(event);
                        break;
                    }
                } else {
                    break;
                }

            } else {
                break;
            }
        }
    },

    ruleDownRight(event, cellLineEasyMode, cellcolumnEasyMode) {

        if (easyMode.easyMode === true) {
            cellLine = cellLineEasyMode;
            cellColumn = cellcolumnEasyMode;
        } else if (computerMode.putPieceComputer === true) {
            cellLine = Number(cellLineEasyMode);
            cellColumn = Number(cellcolumnEasyMode);
        } else {

            cellLine = Number(event.currentTarget.id.split('')[0]);
            cellColumn = Number(event.currentTarget.id.split('')[1]);
        }

        let compteur = -1;
        const cellTargetDownRight = document.getElementById(`${cellLine + 1}${cellColumn + 1}_cell`);


        //---------------to check if white piece towardt left--------------//
        for (let i = cellColumn + 1, y = cellLine + 1; i < 9 && y > 0; i++, y++) {
            const cellNextDownRight = document.getElementById(`${y}${i}_cell`);
            compteur++;


            //----------- Check if there is a piece on the cell ---------------//
            if (cellNextDownRight != null) {
                if (cellNextDownRight.children.length === 1) {
                    //------------if white Piece -> turn over black piece ------------------//
                    if (cellNextDownRight.className.slice(11).trim() === 'cellBlackPiece' && cellTargetDownRight.className.slice(11).trim() !== 'cellBlackPiece') {

                        //------------ Check Potential position for EasyMode ----------------//
                        if (easyMode.easyMode === true && computerMode.putPieceComputer === false) {
                            easyMode.saveCellPieces(cellLineEasyMode, cellcolumnEasyMode);
                            return
                        }
                        //-------------- turn over black piece -> white piece --------------//
                        for (let i = cellColumn + 1, y = cellLine + 1, iCompteur = 0; iCompteur < compteur; i++, y++, iCompteur++) {
                            document.getElementById(`${y}${i}_cell`).classList.add('cellBlackPiece')
                            document.getElementById(`${y}${i}_cell`).classList.remove('cellWhitePiece');

                            document.getElementById(`${y}${i}_cell`).children[0].classList.add('blackPiece');
                            document.getElementById(`${y}${i}_cell`).children[0].classList.remove('whitePiece');

                            document.getElementById(`${y}${i}_cell`).children[0].classList.add('blackPiece--anim');
                            document.getElementById(`${y}${i}_cell`).children[0].classList.remove('whitePiece--anim');
                        }
                        movePiece.counterRule++;
                        movePiece.putPiece(event);
                        break;
                    }
                } else {
                    break;
                }
            } else {
                break;
            }
        }
    },

}