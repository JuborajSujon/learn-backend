export const calculateGradeAndPoint = (totalMarks: number) => {
  let resutl = {
    grade: 'NA',
    gradePoints: 0,
  };

  /**
   * 0-19: F
   * 20-39: D
   * 40-59: C
   * 60-79: B
   * 80-100: A
   */

  if (totalMarks >= 0 && totalMarks <= 19) {
    resutl = {
      grade: 'F',
      gradePoints: 0.0,
    };
  }

  if (totalMarks >= 20 && totalMarks <= 39) {
    resutl = {
      grade: 'D',
      gradePoints: 2.0,
    };
  }

  if (totalMarks >= 40 && totalMarks <= 59) {
    resutl = {
      grade: 'C',
      gradePoints: 3.0,
    };
  }

  if (totalMarks >= 60 && totalMarks <= 79) {
    resutl = {
      grade: 'B',
      gradePoints: 3.5,
    };
  }

  if (totalMarks >= 80 && totalMarks <= 100) {
    resutl = {
      grade: 'A',
      gradePoints: 4.0,
    };
  } else {
    resutl = {
      grade: 'NA',
      gradePoints: 0.0,
    };
  }

  return resutl;
};
