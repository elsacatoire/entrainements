import com.openclassrooms.testing.Calculator;
import org.junit.jupiter.api.*;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;
import org.junit.jupiter.params.provider.ValueSource;

import java.text.MessageFormat;
import java.time.Duration;
import java.time.Instant;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class CalculatorTest {

    private Calculator calculatorUnderTest;

    private static Instant startedAt;

    @BeforeAll
    public static void initStartingTime(){
        System.out.println("Call before all the tests");
        startedAt = Instant.now();
    }

    @AfterAll
    public static void showTestDuration() {
        System.out.println("Call after all tests");
        Instant endedAt = Instant.now();
        long duration = Duration.between(startedAt, endedAt).toMillis();
        System.out.println(MessageFormat.format("Tests lasted for : {0} ms", duration));
    }

    @BeforeEach
    public  void initCalculatorTest(){
        calculatorUnderTest = new Calculator();
    System.out.println("Call before each test");
    }

    @AfterEach
    public void undefCalculator(){
        System.out.println("Call after each test");
        calculatorUnderTest = null;
    }

    @Test
    public void testAddTwoPositiveNumbers() {
        // Arrange
        int a = 2;
        int b = 3;

        // Act
        int sum = calculatorUnderTest.add(a, b);

        // Assert
        assertEquals(5, sum);
    }

    @Test
    public void multiply_shouldReturnTheProduct_ofTwoIntegers() {
        // Arrange
        int a = 42;
        int b = 11;

        // Act
        int product = calculatorUnderTest.multiply(a, b);

        // Assert
        assertEquals(462, product);
    }

    @ParameterizedTest(name = "{0} x 0 should be equal to 0")
    @ValueSource(ints = { 1, 2, 42, 1011, 5089 })
    public void multiply_shouldReturnZero_ofZeroWithMultipleIntegers(int arg) {
        // Arrange -- ready !

        // Act -- Multiply by zero
        int actualResult = calculatorUnderTest.multiply(arg, 0);

        // Assert -- still zero !
        assertEquals(0, actualResult);
    }

    @ParameterizedTest(name = "{0} + {1} should equal to {2}")
    @CsvSource({ "1,1,2", "2,3,5", "42,57,99" })
    public void add_shouldReturnTheSum_ofMultipleIntegers(int arg1, int arg2, int expectResult) {
        // Arrange -- ready !

        // Act
        int actualResult = calculatorUnderTest.add(arg1, arg2);

        // Assert
        assertEquals(expectResult, actualResult);
    }

    @Timeout(1)
    @Test
    public void longCalcul_shouldComputeInLessThan1Second() {
        // Arrange

        // Act
        calculatorUnderTest.longCalculation();

        // Assert
        // ...
    }

}
