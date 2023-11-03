<?php

namespace raudius\phpdf;

use PHPUnit\Framework\TestCase;
use PHPUnit\Framework\Error\Warning;

class IOTest extends TestCase {
    /**
     * @dataProvider providerValidFiles
     */
    public function testSaveAs(string $filePath): void {
        $outPath = 'test_files/tmp.pdf';
        self::assertFalse(file_exists($outPath));
        Phpdf::fopen($filePath, true)->saveAs($outPath);
        self::assertTrue(file_exists($outPath));

        self::assertTrue(unlink($outPath));
    }

    public function testOpenUnknown() {
        $this->expectException(PhpdfException::class);
        $this->expectExceptionMessage('Could not open file in path');
        Phpdf::fopen('404.pdf');
    }

    /**
     * @dataProvider providerValidFiles
     */
    public function testFclose(string $filePath): void {
        $pdf = Phpdf::fopen($filePath, true);
        $pdf->fclose();
        $this->expectException(Warning::class);
        $this->expectExceptionMessage('stream_get_meta_data(): supplied resource is not a valid stream resource');
        $pdf->saveAs('test.pdf');
    }

    public function providerValidFiles(): array {
        return [
            [ 'test_files/restricted.pdf' ],
            [ 'test_files/password.pdf' ],
            [ 'test_files/null.pdf' ],
            [ 'test_files/normal.pdf' ]
        ];
    }
}
